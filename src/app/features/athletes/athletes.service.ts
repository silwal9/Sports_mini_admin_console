import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import {
  AllAthletesGQL,
  Athlete,
  AllAthletesQueryVariables,
} from '../../graphql/generated';
import { FALLBACK_ATHLETES } from '../../core/data/fallback-data';

@Injectable()
export class AthletesService {
  private allAthletesGQL = inject(AllAthletesGQL);

  fetchAthletes(variables?: AllAthletesQueryVariables): Observable<Athlete[]> {
    return this.allAthletesGQL
      .fetch(variables ? { variables } : undefined)
      .pipe(
        map((result) =>
          (result.data?.allAthletes ?? []).filter(Boolean) as Athlete[]
        ),
        catchError(() => of(this.applyClientFilters(FALLBACK_ATHLETES, variables)))
      );
  }

  private applyClientFilters(
    athletes: Athlete[],
    variables?: AllAthletesQueryVariables
  ): Athlete[] {
    let result = [...athletes];

    const filter = variables?.filter;
    if (filter) {
      if (filter.q) {
        const term = filter.q.toLowerCase();
        result = result.filter(
          (a) =>
            a.name.toLowerCase().includes(term) ||
            a.sport.toLowerCase().includes(term)
        );
      }
      if (filter.sport) {
        result = result.filter((a) => a.sport === filter.sport);
      }
    }

    const sortField = variables?.sortField;
    const sortOrder = variables?.sortOrder;
    if (sortField) {
      const dir = sortOrder === 'desc' ? -1 : 1;
      result.sort((a, b) => {
        const aVal = (a as Record<string, unknown>)[sortField];
        const bVal = (b as Record<string, unknown>)[sortField];
        if (typeof aVal === 'number' && typeof bVal === 'number') {
          return (aVal - bVal) * dir;
        }
        return String(aVal).localeCompare(String(bVal)) * dir;
      });
    }

    return result;
  }
}
