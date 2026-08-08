import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Athlete } from '../../../graphql/generated';
import { AthleteCardComponent } from './athlete-card.component';

@Component({
  selector: 'app-athlete-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, AthleteCardComponent],
  template: `
    <h2 mat-dialog-title>Athlete Details</h2>
    <mat-dialog-content>
      <app-athlete-card [athlete]="data" />
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
})
export class AthleteDialogComponent {
  data = inject<Athlete>(MAT_DIALOG_DATA);
}
