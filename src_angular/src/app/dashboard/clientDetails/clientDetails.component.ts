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
import { AppElement } from '../../services/apps.service';

import { Label } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';
import * as _moment from 'moment';
import { ClientElement } from '@src/app/services/clients.service';
const moment = _moment;

export interface DetailData {
  client: ClientElement,
  start: number,
  end: number
}

@Component({
  selector: 'app-dashboard-client-details',
  templateUrl: './clientDetails.component.html',
  styleUrls: ['./../dashboard.component.css']
})


export class ClientDetailsComponent implements OnInit {

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
  displayedColumns: string[] = ['app', 'rx_bytes', 'tx_bytes', 'total_bytes'];

  dataSource: MatTableDataSource<AppElement> = new MatTableDataSource();
  dataDisplayed: [] = [];
  pageIndex: number = 0;
  pageSize: number = 25;
  pageLength: number = 0;
  pageSizeOptions: number[] = [25, 50, 100];

  /////////////////////////
  // Line Chart
  public lineChartLabels: Label[] = [];
  public lineChartData: ChartDataSets[] = [];
  public lineChartLegend = false;
  public lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Client Bandwidth'
    }, scales: {
      yAxes: [{ display: false }],
      xAxes: [{
        type: 'time',
        distribution: 'linear',
        time: {
          parser: 'YYYY-MM-DDTHH:mm:ssZ'
        }
      }]
    }, ticks: {
      beginAtZero: true
    }
  };

  wlans: WlanElement[] = [];
  apps: AppElement[] = [];
  total_rx: number = 0;
  total_tx: number = 0;

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
    private _dialogRef: MatDialogRef<ClientDetailsComponent>,
    private _liveAnnouncer: LiveAnnouncer,
    private _http: HttpClient,
    private _loginService: LoginService,
    private _wlanService: WlansService,
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


    this._loginService.headers.subscribe(headers => this.headers = headers)
    this._loginService.cookies.subscribe(cookies => this.cookies = cookies)
    this._loginService.host.subscribe(host => this.host = host)
    this._loginService.self.subscribe(self => this.self = self || {})
    this._loginService.org_id.subscribe(org_id => this.org_id = org_id)
    this._loginService.site_id.subscribe(site_id => this.site_id = site_id)

    this._wlanService.wlans.subscribe(wlans => this.wlans = wlans)

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
    this.dataSource = new MatTableDataSource<AppElement>(this.apps);
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
    this.getClientDetails();
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


  parseBandwidth(data): void {
    this.lineChartLabels = [];
    for (let j in data["rt"]) {
      this.lineChartLabels.push(data["rt"][j]);
    }
    this.lineChartData = [
      {
        data: data["rx_bytes"],
        label: 'Rx',
        backgroundColor: 'rgba(0,149,163,0.2)',
        borderColor: 'rgba(0,149,163,1)',
        pointBackgroundColor: 'rgba(0,149,163,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0,149,163,0.8)',
        fill: 'origin',
      },
      {
        data: data["tx_bytes"],
        label: 'Tx',
        backgroundColor: 'rgba(132,176,53,0.2)',
        borderColor: 'rgba(132,176,53,1)',
        pointBackgroundColor: 'rgba(132,176,53,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(132,176,53,0.8)',
        fill: 'origin',
      }
    ];
    this.total_tx = this.processTxRx(data["tx_bytes"])
    this.total_rx = this.processTxRx(data["rx_bytes"])
  }

  getClientDetails(): void {
    var body = null;
    body = { host: this.host, cookies: this.cookies, headers: this.headers, site_id: this.site_id, mac: this.data.client.mac, start: this.getStart(), end: this.getEnd() }
    if (body) {
      this.loading = true;
      this._http.post<any[]>('/api/details/clients/', body).subscribe({
        next: data => {
          this.parseBandwidth(data);
          this.apps = data["top-app-by-bytes"];
          this.displayTable()
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
    this._dialogRef.close();
  }
  openAppDetails(app: AppElement): void {
    this._dialogRef.close(app);
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


