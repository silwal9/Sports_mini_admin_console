import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-athletes',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Athletes</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>Coming soon — athlete management.</p>
      </mat-card-content>
    </mat-card>
  `,
})
export class AthletesComponent {}
