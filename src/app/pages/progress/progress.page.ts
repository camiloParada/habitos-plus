import { Component, OnInit } from '@angular/core';
import { Chart, ChartData, ChartOptions, ChartType, registerables } from 'chart.js';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  public barChartOptions: ChartOptions;
  public barChartLabels: string[];
  public barChartData: ChartData;
  public barChartType: ChartType;
  public chartType: ChartType;
  public doughnutChartLabels: string[];
  public doughnutChartData: ChartData;
  public doughnutChartType: ChartType;
  public habitName: string;
  public progressData: ChartData;
  public chartOptions: ChartOptions;

  constructor() {
    Chart.register(...registerables);

    //Linear chart
    this.chartOptions = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 30,
        },
      },
    };
    this.chartType = 'line';
    this.habitName = 'Leer 20 minutos al día';
    this.progressData = {
      labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
      datasets: [
        {
          label: 'Tiempo dedicado (minutos)',
          data: [20, 15, 20, 10, 0, 25, 20],
          fill: false,
          borderColor: '#4CAF50',
          tension: 0.1,
        },
      ],
    };

    //Doughnut chart
    this.doughnutChartLabels = ['Días cumplidos', 'Días no cumplidos'];
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        {
          data: [5, 2],
          backgroundColor: ['#4CAF50', '#F44336'],
        },
      ],
    };
    this.doughnutChartType = 'doughnut';

    //Bar chart
    this.barChartOptions = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 1,
        },
      },
    };
    this.barChartLabels = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']; // Días de la semana
    this.barChartData = {
      labels: this.barChartLabels,
      datasets: [
        {
          label: 'Cumplimiento',
          data: [1, 0, 1, 1, 0, 1, 1],
          backgroundColor: [
            '#4CAF50',
            '#F44336',
            '#4CAF50',
            '#4CAF50',
            '#F44336',
            '#4CAF50',
            '#4CAF50',
          ],
        },
      ],
    };
    this.barChartType = 'bar';
  }

  ngOnInit() {
    console.log('INIT');
  }
}
