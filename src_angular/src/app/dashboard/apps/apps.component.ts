import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

import { AppsService, AppElement } from '../../services/apps.service';

@Component({
  selector: 'app-dashboard-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./../dashboard.component.css']
})


export class AppsComponent implements AfterViewInit {


  multiplicator = ["B", "KB", "MB", "GB", "TB", "PB", "EB"]

  /////////////////////////
  // table
  displayedColumns: string[] = ['app', 'num_clients', 'rx_bytes', 'tx_bytes', 'total_bytes'];
  appsDataSource: MatTableDataSource<AppElement> = new MatTableDataSource();
  appsDisplayed: AppElement[] = [];
  pageIndex: number = 0
  pageSize: number = 25
  pageLength: number = 0
  pageSizeOptions: number[] = [5, 25, 50]


  filter: string = "";

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _appsService: AppsService, private _liveAnnouncer: LiveAnnouncer) { }
  //////////////////////////////////////////////////////////////////////////////
  /////           INIT
  //////////////////////////////////////////////////////////////////////////////
  ngAfterViewInit(): void {
    this._appsService.apps.subscribe(apps => {
      this.appsDataSource = new MatTableDataSource(apps);
      this.appsDataSource.sort = this.sort;
    })
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

  /** Announce the change in sort state for assistive technology. */
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


