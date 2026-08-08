import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, switchMap, takeUntil, startWith } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CurrencyPipe, DecimalPipe, TitleCasePipe } from '@angular/common';

import { AthletesService } from './athletes.service';
import { AthleteDialogComponent } from './athlete-card/athlete-dialog.component';
import { Athlete, AllAthletesQueryVariables, AthleteFilter } from '../../graphql/generated';

@Component({
  selector: 'app-athletes',
  standalone: true,
  imports: [
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    CurrencyPipe,
    DecimalPipe,
    TitleCasePipe,
  ],
  providers: [AthletesService],
  templateUrl: './athletes.component.html',
  styleUrl: './athletes.component.scss',
})
export class AthletesComponent implements OnInit, OnDestroy {
  private athletesService = inject(AthletesService);
  private dialog = inject(MatDialog);
  private destroy$ = new Subject<void>();
  private queryTrigger$ = new Subject<void>();

  athletes = signal<Athlete[]>([]);
  sports = signal<string[]>([]);
  loading = signal(true);
  searchTerm = signal('');
  sportFilter = signal('');
  currentSort = signal<Sort>({ active: '', direction: '' });

  displayedColumns = ['avatar', 'name', 'sport', 'status', 'followers', 'earnings'];

  ngOnInit(): void {
    // Load all athletes first to populate the sport dropdown
    this.athletesService.fetchAthletes()
      .pipe(takeUntil(this.destroy$))
      .subscribe((athletes) => {
        this.sports.set([...new Set(athletes.map((a) => a.sport))].sort());
      });

    this.queryTrigger$
      .pipe(
        startWith(undefined),
        switchMap(() => {
          this.loading.set(true);
          return this.athletesService.fetchAthletes(this.buildQueryParams());
        }),
        takeUntil(this.destroy$),
      )
      .subscribe((athletes) => {
        this.athletes.set(athletes);
        this.loading.set(false);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearch(term: string): void {
    this.searchTerm.set(term);
    this.queryTrigger$.next();
  }

  onSportFilter(sport: string): void {
    this.sportFilter.set(sport);
    this.queryTrigger$.next();
  }

  onSortChange(sort: Sort): void {
    this.currentSort.set(sort);
    this.queryTrigger$.next();
  }

  onRowClick(athlete: Athlete): void {
    this.dialog.open(AthleteDialogComponent, {
      data: athlete,
      width: '600px',
      maxWidth: '90vw',
    });
  }

  private buildQueryParams(): AllAthletesQueryVariables {
    const filter: AthleteFilter = {};
    const term = this.searchTerm();
    const sport = this.sportFilter();

    if (term) {
      filter.q = term;
    }
    if (sport) {
      filter.sport = sport;
    }

    const sort = this.currentSort();
    return {
      filter: Object.keys(filter).length > 0 ? filter : undefined,
      sortField: sort.active && sort.direction ? sort.active : undefined,
      sortOrder: sort.active && sort.direction ? sort.direction : undefined,
    };
  }
}
