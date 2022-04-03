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

  sunFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0;
  };

  // bookingForm = this.fb.group({
  //   name: [null, Validators.required],
  //   email: [null, Validators.required],
  //   package: [null, Validators.required],
  //   postalCode: [null, Validators.compose([
  //     Validators.required, Validators.minLength(5), Validators.maxLength(5)])
  //   ]
  // });


  // packages = [
  //   {packageName: 'Üveg', id: '1'},
  //   {packageName: 'Porcelán', id: '2'},
  //   {packageName: 'Fa', id: '3'},
  //   {packageName: 'Vászon', id: '4'},
  //   {packageName: 'Selyem', id: '5'},
  // ]

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
      this.bookingService.create(booking).subscribe(
        () => {
        this.router.navigate(['/', 'booking']);
     });
  }

  onRemove(booking: Booking): void {
    this.bookingService.delete(booking.id).subscribe(
      () => {
      this.router.navigate(['/', 'booking']);
   });
}


}
