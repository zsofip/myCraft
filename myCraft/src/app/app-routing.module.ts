import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBookingComponent } from './common/edit-booking/edit-booking.component';
import { BookingComponent } from './page/booking/booking.component';
import { PackageComponent } from './page/package/package.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'booking',
    component: BookingComponent,
  },
  {
    path: 'edit-booking/:id',
    component: EditBookingComponent,
  },
  {
    path: 'package',
    component: PackageComponent,
  },
  {
    path: '**',
    component: BookingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
