import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-chart-wrapper',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card class="chart-wrapper">
      <mat-card-header>
        <mat-card-title>{{ title() }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <ng-content />
      </mat-card-content>
    </mat-card>
  `,
  styles: `
    .chart-wrapper {
      height: 100%;
    }

    mat-card-content {
      padding-top: 16px;
    }
  `,
})
export class ChartWrapperComponent {
  title = input.required<string>();
}
