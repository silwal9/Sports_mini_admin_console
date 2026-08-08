import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyPipe, DecimalPipe, TitleCasePipe } from '@angular/common';
import { Athlete } from '../../../graphql/generated';

@Component({
  selector: 'app-athlete-card',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatIconModule, CurrencyPipe, DecimalPipe, TitleCasePipe],
  template: `
    <div class="athlete-card">
      <div class="athlete-header">
        <img
          [src]="athlete().avatar"
          [alt]="athlete().name"
          class="avatar-large"
        />
        <div class="header-info">
          <h2>{{ athlete().name }}</h2>
          <p class="sport">{{ athlete().sport }}</p>
          <mat-chip [highlighted]="athlete().status === 'active'">
            {{ athlete().status | titlecase }}
          </mat-chip>
        </div>
      </div>

      <p class="bio">{{ athlete().bio }}</p>

      <div class="stats-grid">
        <div class="stat-item">
          <mat-icon>people</mat-icon>
          <div>
            <span class="stat-value">{{ athlete().followers | number }}</span>
            <span class="stat-label">Followers</span>
          </div>
        </div>
        <div class="stat-item">
          <mat-icon>payments</mat-icon>
          <div>
            <span class="stat-value">{{ athlete().earnings | currency:'USD':'symbol':'1.0-0' }}</span>
            <span class="stat-label">Earnings</span>
          </div>
        </div>
        @if (athleteStats(); as stats) {
          <div class="stat-item">
            <mat-icon>sports_score</mat-icon>
            <div>
              <span class="stat-value">{{ stats.gamesPlayed }}</span>
              <span class="stat-label">Games Played</span>
            </div>
          </div>
          <div class="stat-item">
            <mat-icon>emoji_events</mat-icon>
            <div>
              <span class="stat-value">{{ stats.careerHighlights }}</span>
              <span class="stat-label">Career Highlights</span>
            </div>
          </div>
          <div class="stat-item">
            <mat-icon>handshake</mat-icon>
            <div>
              <span class="stat-value">{{ stats.endorsements }}</span>
              <span class="stat-label">Endorsements</span>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: `
    .athlete-card {
      padding: 8px;
    }

    .athlete-header {
      display: flex;
      gap: 20px;
      align-items: center;
      margin-bottom: 16px;
    }

    .avatar-large {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
    }

    .header-info h2 {
      margin: 0 0 4px;
    }

    .header-info .sport {
      margin: 0 0 8px;
      opacity: 0.7;
    }

    .bio {
      margin: 16px 0;
      line-height: 1.6;
      opacity: 0.85;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 16px;
      margin-top: 16px;
    }

    .stat-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.05);
    }

    .stat-value {
      display: block;
      font-size: 1.1em;
      font-weight: 500;
    }

    .stat-label {
      display: block;
      font-size: 0.85em;
      opacity: 0.6;
    }
  `,
})
export class AthleteCardComponent {
  athlete = input.required<Athlete>();

  athleteStats = () => {
    const stats = this.athlete().stats;
    if (stats && typeof stats === 'object') {
      return stats as { gamesPlayed: number; careerHighlights: number; endorsements: number };
    }
    return null;
  };
}
