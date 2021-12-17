import { Component, } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: [ './bar-chart.component.scss' ],
})
export class BarChartComponent {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartData<'bar'> ={ 
    labels: ['Cachorro', 'Gato', 'Camelo', 'Piriquito', 'Tamandua', 'Carneiro', 'Panda'],
    datasets: [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Fêmea'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Macho'}
  ]
  
};

  

}