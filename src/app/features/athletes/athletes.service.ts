import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { AllAthletesGQL, Athlete } from '../../graphql/generated';

@Injectable({ providedIn: 'root' })
export class AthletesService {
  private allAthletesGQL = inject(AllAthletesGQL);

  fetchAthletes() {
    return this.allAthletesGQL
      .watch()
      .valueChanges.pipe(
        map((result) => (result.data?.allAthletes ?? []).filter(Boolean) as Athlete[])
      );
  }
}
