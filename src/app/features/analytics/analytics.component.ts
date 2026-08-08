import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Analytics</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>Coming soon — analytics dashboard.</p>
      </mat-card-content>
    </mat-card>
  `,
})
export class AnalyticsComponent {}
