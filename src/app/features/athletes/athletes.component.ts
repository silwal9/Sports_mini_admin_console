import { Component, inject, signal, computed, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
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
import { Athlete } from '../../graphql/generated';

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
  templateUrl: './athletes.component.html',
  styleUrl: './athletes.component.scss',
})
export class AthletesComponent implements OnInit, OnDestroy {
  private athletesService = inject(AthletesService);
  private dialog = inject(MatDialog);
  private destroy$ = new Subject<void>();
  athletes = signal<Athlete[]>([]);
  loading = signal(true);
  searchTerm = signal('');
  sportFilter = signal('');
  currentSort = signal<Sort>({ active: '', direction: '' });

  displayedColumns = ['avatar', 'name', 'sport', 'status', 'followers', 'earnings'];

  sports = computed(() => {
    const all = this.athletes();
    return [...new Set(all.map((a) => a.sport))].sort();
  });

  filteredAthletes = computed(() => {
    let list = this.athletes();
    const term = this.searchTerm().toLowerCase();
    const sport = this.sportFilter();

    if (term) {
      list = list.filter((a) => a.name.toLowerCase().includes(term));
    }
    if (sport) {
      list = list.filter((a) => a.sport === sport);
    }

    const sort = this.currentSort();
    if (sort.active && sort.direction) {
      list = [...list].sort((a, b) => {
        const aVal = (a as Record<string, unknown>)[sort.active];
        const bVal = (b as Record<string, unknown>)[sort.active];
        const cmp = typeof aVal === 'number' && typeof bVal === 'number'
          ? aVal - bVal
          : String(aVal).localeCompare(String(bVal));
        return sort.direction === 'asc' ? cmp : -cmp;
      });
    }

    return list;
  });

  ngOnInit(): void {
    this.athletesService.fetchAthletes()
      .pipe(takeUntil(this.destroy$))
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
  }

  onSportFilter(sport: string): void {
    this.sportFilter.set(sport);
  }

  onSortChange(sort: Sort): void {
    this.currentSort.set(sort);
  }

  onRowClick(athlete: Athlete): void {
    this.dialog.open(AthleteDialogComponent, {
      data: athlete,
      width: '600px',
      maxWidth: '90vw',
    });
  }
}
