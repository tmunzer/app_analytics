import { AfterViewInit, Component, ViewChild, Input } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

import { AppsService, AppElement } from '../../services/apps.service';
import { MatDialog } from '@angular/material/dialog';
import { AppDetailsComponent } from '../appDetails/appDetails.component';
import { ClientElement } from '@src/app/services/clients.service';
import { ClientDetailsComponent } from '../clientDetails/clientDetails.component';

@Component({
  selector: 'app-dashboard-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./../dashboard.component.css']
})


export class AppsComponent implements AfterViewInit {

  /////////////////////////
  // table
  displayedColumns: string[] = ['app', 'num_clients', 'rx_bytes', 'tx_bytes', 'total_bytes'];
  appsDataSource: MatTableDataSource<AppElement> = new MatTableDataSource();
  appsDisplayed: AppElement[] = [];
  pageIndex: number = 0
  pageSize: number = 25
  pageLength: number = 0
  pageSizeOptions: number[] = [25, 50, 100]

  display: boolean = false;

  filter: string = "";

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() start: number;
  @Input() end: number;

  constructor(private _appsService: AppsService, private _liveAnnouncer: LiveAnnouncer, private _dialog: MatDialog) { }
  //////////////////////////////////////////////////////////////////////////////
  /////           INIT
  //////////////////////////////////////////////////////////////////////////////
  ngAfterViewInit(): void {
    this._appsService.apps.subscribe(apps => {
      this.appsDataSource = new MatTableDataSource(apps);
      this.appsDataSource.sort = this.sort;
      this.appsDataSource.paginator = this.paginator;
    })
    this._appsService.display.subscribe(display => {
      this.display = display;
    })
  }

  //////////////////////////////////////////////////////////////////////////////
  /////           TABLE
  //////////////////////////////////////////////////////////////////////////////
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.appsDataSource.filter = filterValue.trim().toLowerCase();

    if (this.appsDataSource.paginator) {
      this.appsDataSource.paginator.firstPage();
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


