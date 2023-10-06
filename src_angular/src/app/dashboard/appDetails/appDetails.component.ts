import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { HttpClient } from '@angular/common/http';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { UntypedFormControl } from '@angular/forms';

import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';

import { LoginService } from '../../services/login.service';
import { WlanElement, WlansService } from '../../services/wlans.service';
import { ClientElement, ClientsService } from '../../services/clients.service';
import { AppElement } from '@src/app/services/apps.service';

import * as _moment from 'moment';
const moment = _moment;

export interface DetailData {
  app: AppElement,
  start: number,
  end: number
}

@Component({
  selector: 'app-dashboard-app-details',
  templateUrl: './appDetails.component.html',
  styleUrls: ['./../dashboard.component.css']
})


export class AppDetailsComponent implements OnInit {

  headers = {};
  cookies = {};
  host = '';
  self = {};
  orgs = [];
  sites = [];
  maps = [];
  org_id: string = "";
  site_id: string = "__any__";
  me: string = "";

  /////////////////////////
  // table
  displayedColumns: string[] = ['ssid', 'mac', 'hostname', 'username', 'ip', 'total_bytes'];

  dataSource: MatTableDataSource<ClientElement> = new MatTableDataSource();
  dataDisplayed: [] = [];
  pageIndex: number = 0;
  pageSize: number = 25;
  pageLength: number = 0;
  pageSizeOptions: number[] = [25, 50, 100];

  wlans: WlanElement[] = [];
  clients: ClientElement[] = [];
  clientList: ClientElement[] = [];
  total_bytes: number = 0;

  // DATE SELECTORS
  @ViewChild('picker') picker: any;
  public min_start_date: moment.Moment = moment().subtract(7, 'day');
  public max_start_date: moment.Moment;
  startDateControl = new UntypedFormControl(moment().second(0).subtract(1, 'day'));
  public min_end_date: moment.Moment;
  public max_end_date: moment.Moment = moment();
  endDateControl = new UntypedFormControl(moment().second(0));


  display: boolean = false;
  loading: boolean = false;
  filter: string = "";

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private _dialogRef: MatDialogRef<AppDetailsComponent>,
    private _liveAnnouncer: LiveAnnouncer,
    private _http: HttpClient,
    private _loginService: LoginService,
    private _wlanService: WlansService,
    private _clientService: ClientsService,
    @Inject(MAT_DIALOG_DATA) public data: DetailData
  ) { }
  //////////////////////////////////////////////////////////////////////////////
  /////           INIT
  //////////////////////////////////////////////////////////////////////////////
  ngOnInit(): void {
    this.startDateControl.setValue(moment.unix(this.data.start));
    this.endDateControl.setValue(moment.unix(this.data.end));
    this.startDateControl.valueChanges.subscribe(value => {
      this.min_end_date = moment(value);
    })
    this.endDateControl.valueChanges.subscribe(value => {
      this.max_start_date = moment(value);
    })


    this._loginService.headers.subscribe(headers => this.headers = headers);
    this._loginService.cookies.subscribe(cookies => this.cookies = cookies);
    this._loginService.host.subscribe(host => this.host = host);
    this._loginService.self.subscribe(self => this.self = self || {});
    this._loginService.org_id.subscribe(org_id => this.org_id = org_id);
    this._loginService.site_id.subscribe(site_id => this.site_id = site_id);

    this._wlanService.wlans.subscribe(wlans => this.wlans = wlans);
    this._clientService.clients.subscribe(clients => this.clientList = clients);

    this.refresh();
  }

  //////////////////////////////////////////////////////////////////////////////
  /////           TABLE
  //////////////////////////////////////////////////////////////////////////////
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayTable(): void {
    this.dataSource = new MatTableDataSource<ClientElement>(this.clients);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  //////////////////////////////////////////////////////////////////////////////
  /////           TIME MANAGEMENT
  //////////////////////////////////////////////////////////////////////////////
  setMinutes(date: moment.Moment): moment.Moment {
    const minutes = date.minute();
    if (minutes < 10) date.minute(0);
    else if (minutes < 20) date.minute(10);
    else if (minutes < 30) date.minute(20);
    else if (minutes < 40) date.minute(30);
    else if (minutes < 50) date.minute(40);
    else date.minute(50);
    return date;
  }
  getStart(): number {
    return this.startDateControl.value.unix();
  }
  getEnd(): number {
    return this.endDateControl.value.unix();
  }

  refresh(): void {
    this.getAppDetails();
  }

  //////////////////////////////////////////////////////////////////////////////
  /////           Client Detail Data
  //////////////////////////////////////////////////////////////////////////////
  processTxRx(bytes_array: number[]): number {
    let bytes = 0;
    let m = 0;
    let result = "";
    for (let i in bytes_array) {
      bytes = bytes + bytes_array[i];
    }
    return bytes;
  }

  findClientInfo(mac: string): ClientElement {
    var result = { mac: mac } as ClientElement;
    this.clientList.forEach(client => {
      if (client.mac == mac) {
        result = client;
      }
    })
    return result;
  }

  parseClients(data): void {
    this.clients = [];
    this.total_bytes = 0;
    Array.from(data).forEach(client => {
      var clientInfo = this.findClientInfo(client["mac"])
      clientInfo.total_bytes = client["total_bytes"];
      this.total_bytes = this.total_bytes + client["total_bytes"];
      this.clients.push(clientInfo);
    })
    this.displayTable();
  }

  getAppDetails(): void {
    var body = null
    body = { host: this.host, cookies: this.cookies, headers: this.headers, site_id: this.site_id, app: this.data.app.app, start: this.getStart(), end: this.getEnd() }
    if (body) {
      this.loading = true;
      this._http.post<any[]>('/api/details/apps/', body).subscribe({
        next: data => {
          this.parseClients(data["top-client"])
          this.loading = false;
        },
        error: error => {
          this.loading = false;
          var message: string = "There was an error... "
          if ("error" in error) { message += error["error"]["message"] }
          console.log(message)
        }
      })
    }
  }
  //////////////////////////////////////////////////////////////////////////////
  /////           COMMON
  //////////////////////////////////////////////////////////////////////////////
  close(): void {
    this._dialogRef.close()
  }

  openClientDetails(client: ClientElement): void {
    this._dialogRef.close(client)
  }
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}


