import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBookingComponent } from './common/edit-booking/edit-booking.component';
import { BookingComponent } from './page/booking/booking.component';

const routes: Routes = [
  {
    path: 'booking',
    component: BookingComponent,
  },
  {
    path: 'edit-booking/:id',
    component: EditBookingComponent,
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
