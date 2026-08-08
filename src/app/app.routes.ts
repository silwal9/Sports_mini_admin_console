import { Routes } from '@angular/router';
import { SidenavShellComponent } from './layout/sidenav-shell/sidenav-shell.component';

export const routes: Routes = [
  {
    path: '',
    component: SidenavShellComponent,
    children: [
      {
        path: 'athletes',
        loadComponent: () =>
          import('./features/athletes/athletes.component').then(
            (m) => m.AthletesComponent
          ),
      },
      {
        path: 'analytics',
        loadComponent: () =>
          import('./features/analytics/analytics.component').then(
            (m) => m.AnalyticsComponent
          ),
      },
      { path: '', redirectTo: 'athletes', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'athletes' },
];
