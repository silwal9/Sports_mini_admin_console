import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { AllAthletesGQL, Athlete } from './graphql/generated';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe, DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'buzzerboard';

  private allAthletesGQL = inject(AllAthletesGQL);
  athletes$!: Observable<Partial<Athlete>[]>;

  ngOnInit(): void {
    this.athletes$ = this.allAthletesGQL
      .watch()
      .valueChanges.pipe(
        map((result) => (result.data?.allAthletes ?? []).filter(Boolean) as Partial<Athlete>[])
      );
  }
}
