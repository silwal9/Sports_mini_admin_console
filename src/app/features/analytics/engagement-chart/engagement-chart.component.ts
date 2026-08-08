import { Component, input, computed } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { EngagementBySport } from '../../../graphql/generated';

@Component({
  selector: 'app-engagement-chart',
  standalone: true,
  imports: [BaseChartDirective],
  template: `
    <canvas
      baseChart
      [type]="'bar'"
      [data]="chartData()"
      [options]="chartOptions"
    ></canvas>
  `,
  styles: `
    :host {
      display: block;
      position: relative;
      height: 300px;
    }

    canvas {
      width: 100% !important;
      height: 100% !important;
    }
  `,
})
export class EngagementChartComponent {
  engagementData = input.required<EngagementBySport[]>();

  chartData = computed<ChartConfiguration<'bar'>['data']>(() => {
    const data = this.engagementData();
    return {
      labels: data.map((d) => d.sport),
      datasets: [
        {
          label: 'Engagement Rate (%)',
          data: data.map((d) => d.avgEngagementRate),
          backgroundColor: 'rgba(244, 67, 54, 0.7)',
          borderColor: '#f44336',
          borderWidth: 1,
          borderRadius: 4,
        },
        {
          label: 'Followers (M)',
          data: data.map((d) => d.followers / 1_000_000),
          backgroundColor: 'rgba(255, 152, 0, 0.7)',
          borderColor: '#ff9800',
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    };
  });

  chartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: 'rgba(255, 255, 255, 0.7)' },
      },
    },
    scales: {
      x: {
        ticks: { color: 'rgba(255, 255, 255, 0.7)' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
      },
      y: {
        ticks: { color: 'rgba(255, 255, 255, 0.7)' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
      },
    },
  };
}
