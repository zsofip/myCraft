import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/model/booking';
import { BookingService } from './../../service/booking.service';



@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {

  bookingList$: Observable<Booking[]> = this.bookingService.getAll();
  keys: string[] = Object.keys(new Booking());
  componentName = 'booking';

  constructor(
    private bookingService: BookingService,
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  onDelete(id: number): void {
    this.bookingService.delete(id).subscribe(
      response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/', this.componentName]);
      }
      )
    )
  }
}
