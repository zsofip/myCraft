import { PackageService } from './../../service/package.service';
import { Package } from './../../model/package';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, Observable, map } from 'rxjs';
import { Booking } from 'src/app/model/booking';
import { BookingService } from 'src/app/service/booking.service';


@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.scss']
})
export class EditBookingComponent implements OnInit {

  booking!: Booking;
  newBooking: Booking = new Booking();
  id!: string;

  packages$: Observable<Package[]> = this.packageService.getAll();
  bookings$: Observable<Booking[]> = this.bookingService.getAll();

  constructor(
    private ar: ActivatedRoute,
    private bookingService: BookingService,
    private router: Router,
    private packageService: PackageService
  ) { }

  ngOnInit(): void {
    this.ar.params.pipe(
      switchMap(params => this.id = params['id'])).subscribe(
        () => {
          if (this.id === '0') {
            this.booking = this.newBooking;
          } else {
            this.bookingService.getOne(Number(this.id)).subscribe(
              (result) => this.booking = result
            )
          }
        }
      );
  }

  overlappingAppointments(booking1: Booking, booking2: Booking): boolean {
    if (booking1.appointment.date < booking2.appointment.date &&
      booking1.appointment.time < booking2.appointment.time)
      return false;

    if (booking1.appointment.date > booking2.appointment.date &&
      booking1.appointment.time > booking2.appointment.time)
      return false;

    return true;
  }

  isOverlap(booking: Booking): any { this.bookings$.pipe(
    map(list => {
      return list.forEach(item => {
        return this.overlappingAppointments(this.booking, item)});
      })); }

  onUpdate(booking: Booking): void {

    if (booking.id === 0) {
            this.bookingService.create(booking).subscribe(
              () => {
                this.router.navigate(['/', 'booking']);
              });
            } else if (booking.id !== 0) {
              this.bookingService.update(booking).subscribe(
              booking => {
                this.router.navigate(['/', 'booking']);
              });
            }


        }


onRemove(booking: Booking): void {
          this.bookingService.delete(booking.id).subscribe(
            () => {
              this.router.navigate(['/', 'booking']);
            });
        }
}


// alert("Az időpont foglalt!");
