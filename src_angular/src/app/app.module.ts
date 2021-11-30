import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { GoogleMapsModule } from '@angular/google-maps';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

import { StartsWithPipe, MapToArrayPipe } from '@src/app/common/common-pipes';

import { ChartsModule } from 'ng2-charts';

import {
  NgxMatDatetimePickerModule, 
  NgxMatNativeDateModule, 
  NgxMatTimepickerModule 
} from '@angular-material-components/datetime-picker';

import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { LoginComponent } from '@src/app/login/login.component';
import { TwoFactorDialog } from '@src/app/login/login-2FA';
import { DashboardComponent } from '@src/app/dashboard/dashboard.component';
import { ClientsComponent } from '@src/app/dashboard/clients/clients.component';
import { AppsComponent } from '@src/app/dashboard/apps/apps.component';
import { ClientDetailsComponent } from '@src/app/dashboard/clientDetails/clientDetails.component';
import { AppDetailsComponent } from '@src/app/dashboard/appDetails/appDetails.component';
import { ErrorDialog } from '@src/app/common/common-error';
import { WarningDialog } from '@src/app/common/common-warning';
import { OrgComponent } from '@src/app/org/org.component';
import { BytesPipe } from '@src/app/common/pipe/bytes_pipe'
import { WlanPipe } from '@src/app/common/pipe/wlan_pipe'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, TwoFactorDialog,
    DashboardComponent, ClientsComponent, AppsComponent, ClientDetailsComponent, AppDetailsComponent,
    ErrorDialog, WarningDialog, BytesPipe, WlanPipe,
    OrgComponent,
    StartsWithPipe,
    MapToArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ChartsModule,
    FlexLayoutModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatButtonModule,
    MatChipsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatTableModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatSortModule,
    MatToolbarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    MatIconModule,
    MatSnackBarModule,
    NgbModule,
    MatGoogleMapsAutocompleteModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    NgxMatMomentModule,
    AgmCoreModule.forRoot()
  ],
  providers: [{
    provide: MatRadioModule,
    useValue: { color: 'accent' },
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
  }
}