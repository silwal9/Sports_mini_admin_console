import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  template: `
    <mat-card class="stat-card">
      <mat-card-content>
        <div class="stat-card-layout">
          <div class="stat-icon">
            <mat-icon>{{ icon() }}</mat-icon>
          </div>
          <div class="stat-info">
            <span class="stat-label">{{ label() }}</span>
            <span class="stat-value">{{ value() }}</span>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: `
    .stat-card {
      height: 100%;
    }

    .stat-card-layout {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 8px 0;
    }

    .stat-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: rgba(244, 67, 54, 0.15);

      mat-icon {
        color: #f44336;
        font-size: 28px;
        width: 28px;
        height: 28px;
      }
    }

    .stat-info {
      display: flex;
      flex-direction: column;
    }

    .stat-label {
      font-size: 0.85em;
      opacity: 0.7;
      margin-bottom: 4px;
    }

    .stat-value {
      font-size: 1.5em;
      font-weight: 600;
    }
  `,
})
export class StatCardComponent {
  label = input.required<string>();
  value = input.required<string>();
  icon = input.required<string>();
}
