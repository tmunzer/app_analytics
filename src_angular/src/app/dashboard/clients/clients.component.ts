import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ClientsService, ClientElement } from '../../services/clients.service';
import { WlansService, WlanElement } from '../../services/wlans.service';
import { ClientDetailsComponent } from '../clientDetails/clientDetails.component';
import { AppElement } from '@src/app/services/apps.service';
import { AppDetailsComponent } from '../appDetails/appDetails.component';

@Component({
  selector: 'app-dashboard-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./../dashboard.component.css']
})


export class ClientsComponent implements AfterViewInit {
  /////////////////////////
  // table
  displayedColumns: string[] = ['ssid', 'mac', 'hostname', 'username', 'ip', 'tx_bytes', 'rx_bytes', 'total_bytes', 'assoc_time'];
  clientsDataSource: MatTableDataSource<ClientElement> = new MatTableDataSource();
  clientsDisplayed: ClientElement[] = [];
  pageIndex: number = 0;
  pageSize: number = 25;
  pageLength: number = 0;
  pageSizeOptions: number[] = [25, 50, 100];


  spinnerMode: string = "indeterminate";
  spinnerValue: number = 0;


  clients: ClientElement[] = [];
  wlans: WlanElement[] = [];
  display: boolean = false;

  filter: string = "";

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() start: number;
  @Input() end: number;

  constructor(private _clientsService: ClientsService, private _wlanService: WlansService, private _liveAnnouncer: LiveAnnouncer, private _dialog: MatDialog) { }
  //////////////////////////////////////////////////////////////////////////////
  /////           INIT
  //////////////////////////////////////////////////////////////////////////////
  ngAfterViewInit(): void {

    this._clientsService.clients.subscribe(clients => {
      this.clients = clients;
      this.displayTable();
    })
    this._clientsService.progress.subscribe(progress => {
      console.log(progress)
      if (progress > 0) {
        this.spinnerMode = "determinate";
        this.spinnerValue = progress;
      } else {
        this.spinnerMode = "indeterminate";
      }
    })
    this._clientsService.display.subscribe(display => {
      this.display = display;
      this.displayTable();
    })
    this._wlanService.wlans.subscribe(wlans => this.wlans = wlans)
  }

  displayTable(): void {
    if (this.display) {
      this.clientsDataSource = new MatTableDataSource(this.clients);
      this.clientsDataSource.sort = this.sort;
      this.clientsDataSource.paginator = this.paginator;
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  /////           TABLE
  //////////////////////////////////////////////////////////////////////////////
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.clientsDataSource.filter = filterValue.trim().toLowerCase();

    if (this.clientsDataSource.paginator) {
      this.clientsDataSource.paginator.firstPage();
    }
  }
  //////////////////////////////////////////////////////////////////////////////
  /////           COMMON
  //////////////////////////////////////////////////////////////////////////////
  // DETAILS
  openAppDetails(app: AppElement) {
    const dialogRef = this._dialog.open(AppDetailsComponent, {
      data: {
        app: app,
        start: this.start,
        end: this.end
      },
    });
    dialogRef.afterClosed().subscribe(client => {
      if (client) {
        this.openClientDetails(client);
      }
    });
  }
  openClientDetails(client: ClientElement) {
    const dialogRef = this._dialog.open(ClientDetailsComponent, {
      data: {
        client: client,
        start: this.start,
        end: this.end
      },
    });
    dialogRef.afterClosed().subscribe(client => {
      if (client) {
        this.openAppDetails(client);
      }
    });
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


