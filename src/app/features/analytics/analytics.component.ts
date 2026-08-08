import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { Subject, forkJoin, takeUntil } from 'rxjs';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AnalyticsService } from './analytics.service';
import { EngagementChartComponent } from './engagement-chart/engagement-chart.component';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card.component';
import { ChartWrapperComponent } from '../../shared/components/chart-wrapper/chart-wrapper.component';
import { DARK_CHART_SCALE, DARK_CHART_LEGEND } from '../../shared/chart-defaults';
import {
  PlatformStat,
  FanGrowth,
  EngagementBySport,
} from '../../graphql/generated';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    BaseChartDirective,
    MatProgressSpinnerModule,
    StatCardComponent,
    ChartWrapperComponent,
    EngagementChartComponent,
  ],
  providers: [AnalyticsService],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss',
})
export class AnalyticsComponent implements OnInit, OnDestroy {
  private analyticsService = inject(AnalyticsService);
  private destroy$ = new Subject<void>();

  loading = signal(true);
  stats = signal<PlatformStat | null>(null);
  fanGrowth = signal<FanGrowth[]>([]);
  engagement = signal<EngagementBySport[]>([]);

  fanGrowthChartData = signal<ChartConfiguration<'line'>['data']>({
    labels: [],
    datasets: [],
  });

  fanGrowthChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: DARK_CHART_LEGEND },
    scales: {
      x: DARK_CHART_SCALE,
      y: {
        ...DARK_CHART_SCALE,
        ticks: {
          ...DARK_CHART_SCALE.ticks,
          callback: (value) => `${Number(value) / 1_000_000}M`,
        },
      },
    },
  };

  ngOnInit(): void {
    forkJoin({
      stats: this.analyticsService.fetchPlatformStats(),
      fanGrowth: this.analyticsService.fetchFanGrowth(),
      engagement: this.analyticsService.fetchEngagement(),
    })
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ stats, fanGrowth, engagement }) => {
        this.stats.set(stats[0] ?? null);
        this.fanGrowth.set(fanGrowth);
        this.engagement.set(engagement);
        this.fanGrowthChartData.set(this.buildFanGrowthChart(fanGrowth));
        this.loading.set(false);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  formatStatValue(value: number): string {
    if (value >= 1_000_000) {
      return `${(value / 1_000_000).toFixed(1)}M`;
    }
    if (value >= 1_000) {
      return `${(value / 1_000).toFixed(1)}K`;
    }
    return value.toString();
  }

  private buildFanGrowthChart(data: FanGrowth[]): ChartConfiguration<'line'>['data'] {
    return {
      labels: data.map((d) => this.formatMonth(d.month)),
      datasets: [
        {
          label: 'Total Fans',
          data: data.map((d) => d.totalFans),
          borderColor: '#f44336',
          backgroundColor: 'rgba(244, 67, 54, 0.1)',
          fill: true,
          tension: 0.3,
          pointBackgroundColor: '#f44336',
        },
        {
          label: 'New Fans',
          data: data.map((d) => d.newFans),
          borderColor: '#ff9800',
          backgroundColor: 'rgba(255, 152, 0, 0.1)',
          fill: true,
          tension: 0.3,
          pointBackgroundColor: '#ff9800',
        },
      ],
    };
  }

  private formatMonth(month: string): string {
    const [year, m] = month.split('-');
    const date = new Date(Number(year), Number(m) - 1);
    return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
  }
}
