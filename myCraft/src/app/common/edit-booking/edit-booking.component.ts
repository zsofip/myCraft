import { PackageService } from './../../service/package.service';
import { Package } from './../../model/package';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, Observable } from 'rxjs';
import { Booking } from 'src/app/model/booking';
import { BookingService } from 'src/app/service/booking.service';
import { FormBuilder, Validators } from '@angular/forms';


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

  constructor(
    private ar: ActivatedRoute,
    private bookingService: BookingService,
    private router: Router,
    private fb: FormBuilder,
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

  onUpdate(booking: Booking): void {
    if (booking.id === 0) {
      this.bookingService.create(booking).subscribe(
        () => {
        this.router.navigate(['/', 'booking']);
     });
    } else {
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
