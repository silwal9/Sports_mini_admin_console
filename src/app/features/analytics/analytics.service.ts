import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import {
  AllPlatformStatsGQL,
  AllFanGrowthGQL,
  AllEngagementBySportGQL,
  PlatformStat,
  FanGrowth,
  EngagementBySport,
} from '../../graphql/generated';

@Injectable()
export class AnalyticsService {
  private platformStatsGQL = inject(AllPlatformStatsGQL);
  private fanGrowthGQL = inject(AllFanGrowthGQL);
  private engagementGQL = inject(AllEngagementBySportGQL);

  fetchPlatformStats() {
    return this.platformStatsGQL
      .fetch()
      .pipe(
        map((r) => (r.data?.allPlatformStats ?? []).filter(Boolean) as PlatformStat[])
      );
  }

  fetchFanGrowth() {
    return this.fanGrowthGQL
      .fetch()
      .pipe(
        map((r) => (r.data?.allFanGrowths ?? []).filter(Boolean) as FanGrowth[])
      );
  }

  fetchEngagement() {
    return this.engagementGQL
      .fetch()
      .pipe(
        map((r) => (r.data?.allEngagementBySports ?? []).filter(Boolean) as EngagementBySport[])
      );
  }
}
