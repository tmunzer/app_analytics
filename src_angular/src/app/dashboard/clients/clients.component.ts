import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ClientsService, ClientElement } from '../../services/clients.service';
import { WlansService, WlanElement } from '../../services/wlans.service';

@Component({
  selector: 'app-dashboard-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./../dashboard.component.css']
})


export class ClientsComponent implements AfterViewInit {

  /////////////////////////
  // table
  displayedColumns: string[] = ['ssid', 'mac', 'hostname', 'username', 'ip', 'rx_bytes', 'tx_bytes', 'total_bytes'];
  clientsDataSource: MatTableDataSource<ClientElement> = new MatTableDataSource();
  clientsDisplayed: ClientElement[] = [];
  pageIndex: number = 0;
  pageSize: number = 25;
  pageLength: number = 0;
  pageSizeOptions: number[] = [5, 25, 50];


  clients: ClientElement[] = [];
  wlans: WlanElement[] = [];
  display: boolean = false;

  filter: string = "";

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _clientsService: ClientsService, private _wlanService: WlansService, private _liveAnnouncer: LiveAnnouncer) { }
  //////////////////////////////////////////////////////////////////////////////
  /////           INIT
  //////////////////////////////////////////////////////////////////////////////
  ngAfterViewInit(): void {

    this._clientsService.clients.subscribe(clients => {
      this.clients = clients;
      this.displayTable();
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
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  /////           COMMON
  //////////////////////////////////////////////////////////////////////////////


  sortList(data, attribute) {
    return data.sort(function (a, b) {
      var nameA = a[attribute].toUpperCase(); // ignore upper and lowercase
      var nameB = b[attribute].toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
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


