import { BookingService } from 'src/app/service/booking.service';
import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';


@Component({
  selector: 'app-package-sales-chart',
  templateUrl: './package-sales-chart.component.html',
  styleUrls: ['./package-sales-chart.component.scss']
})
export class PackageSalesChartComponent {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ],
    datasets: [ {
      data: [ 300, 500, 100 ]
    } ]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(
    private bookingService: BookingService
  ) { }
}
