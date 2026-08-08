import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  AllAthletesGQL,
  Athlete,
  AllAthletesQueryVariables,
} from '../../graphql/generated';

@Injectable()
export class AthletesService {
  private allAthletesGQL = inject(AllAthletesGQL);

  fetchAthletes(variables?: AllAthletesQueryVariables): Observable<Athlete[]> {
    return this.allAthletesGQL
      .fetch(variables ? { variables } : undefined)
      .pipe(
        map((result) =>
          (result.data?.allAthletes ?? []).filter(Boolean) as Athlete[]
        )
      );
  }
}
