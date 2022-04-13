import { PackageService } from './../../service/package.service';
import { Package } from './../../model/package';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, Observable, map, filter, toArray, count, reduce } from 'rxjs';
import { Booking } from 'src/app/model/booking';
import { BookingService } from 'src/app/service/booking.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';


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


  isSubmitBtnDisabled: boolean= false;

  public onDateChange(event: MatDatepickerInputEvent<Date>): void {
    const isOverlap =
    this.bookings$.pipe(
    map(list => list.filter(item => item.appointment.date === moment(event.value).toJSON())));
    const subscribe = isOverlap.subscribe((value) => {
      console.log(value.length)
      if (value.length > 3) {
        this.isSubmitBtnDisabled = true;
        alert("Az időpont betelt!");
      } else this.isSubmitBtnDisabled = false;
    }
  )
      }



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


