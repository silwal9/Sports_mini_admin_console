import { Injectable, inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import {
  AllPlatformStatsGQL,
  AllFanGrowthGQL,
  AllEngagementBySportGQL,
  PlatformStat,
  FanGrowth,
  EngagementBySport,
} from '../../graphql/generated';
import {
  FALLBACK_PLATFORM_STATS,
  FALLBACK_FAN_GROWTH,
  FALLBACK_ENGAGEMENT,
} from '../../core/data/fallback-data';

@Injectable()
export class AnalyticsService {
  private platformStatsGQL = inject(AllPlatformStatsGQL);
  private fanGrowthGQL = inject(AllFanGrowthGQL);
  private engagementGQL = inject(AllEngagementBySportGQL);

  fetchPlatformStats() {
    return this.platformStatsGQL
      .fetch()
      .pipe(
        map((r) => (r.data?.allPlatformStats ?? []).filter(Boolean) as PlatformStat[]),
        catchError(() => of(FALLBACK_PLATFORM_STATS))
      );
  }

  fetchFanGrowth() {
    return this.fanGrowthGQL
      .fetch()
      .pipe(
        map((r) => (r.data?.allFanGrowths ?? []).filter(Boolean) as FanGrowth[]),
        catchError(() => of(FALLBACK_FAN_GROWTH))
      );
  }

  fetchEngagement() {
    return this.engagementGQL
      .fetch()
      .pipe(
        map((r) => (r.data?.allEngagementBySports ?? []).filter(Boolean) as EngagementBySport[]),
        catchError(() => of(FALLBACK_ENGAGEMENT))
      );
  }
}
