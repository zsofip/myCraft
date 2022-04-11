import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingListComponent } from './common/booking-list/booking-list.component';
import { BookingComponent } from './page/booking/booking.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { EditBookingComponent } from './common/edit-booking/edit-booking.component';
import { PackageCardComponent } from './common/package-card/package-card.component';
import { PackageComponent } from './page/package/package.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';

import { NgChartsModule } from 'ng2-charts';
import { DashComponent } from './common/dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { BaseCardComponent } from './common/base-card/base-card.component';
import { PackageSalesChartComponent } from './common/charts/package-sales-chart/package-sales-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingListComponent,
    BookingComponent,
    SidenavComponent,
    EditBookingComponent,
    PackageCardComponent,
    PackageComponent,
    DashboardComponent,
    DashComponent,
    BaseCardComponent,
    PackageSalesChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatExpansionModule,
    CdkAccordionModule,
    NgChartsModule,
    MatGridListModule,
    MatMenuModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'hu-HU'},
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {strict: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
