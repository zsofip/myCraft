import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Appointment } from '../model/appointment';
import { Booking } from '../model/booking';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService extends BaseService<Booking>{

  constructor(
    public override http: HttpClient,
  ) {
    super(http);
    this.entityName = 'booking';
   }

   bookingAppointment: Appointment = new Appointment();

   createAppointment(booking: Booking): Booking {
    if (typeof booking.appointment === 'object') {
      this.bookingAppointment = new Appointment()
      this.bookingAppointment.date = booking.appointment.date
      this.bookingAppointment.time = booking.appointment.time
      booking.appointment = this.bookingAppointment
    }
    return booking;
  }

  override getAll(): Observable<Booking[]> {
    return super.getAll().pipe(
      map(list => {
        return list.map(booking => {
          return this.createAppointment(booking)});
      }),
    );
  }

  override getOne(id: number): Observable<Booking> {
    return super.getOne(id).pipe(
      map(booking => this.createAppointment(booking) )
    );
  }
}
