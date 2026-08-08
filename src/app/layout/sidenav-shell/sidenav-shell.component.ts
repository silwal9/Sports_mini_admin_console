import { Component, computed, inject, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-sidenav-shell',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ToolbarComponent,
  ],
  templateUrl: './sidenav-shell.component.html',
  styleUrl: './sidenav-shell.component.scss',
})
export class SidenavShellComponent {
  private breakpointObserver = inject(BreakpointObserver);

  @ViewChild('sidenav') sidenav!: MatSidenav;

  private isHandset = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(map((result) => result.matches)),
    { initialValue: false }
  );

  sidenavMode = computed(() => (this.isHandset() ? 'over' : 'side'));
  sidenavOpened = computed(() => !this.isHandset());

  navItems = [
    { path: 'athletes', label: 'Athletes', icon: 'sports' },
    { path: 'analytics', label: 'Analytics', icon: 'analytics' },
  ];

  onNavClick(): void {
    if (this.isHandset()) {
      this.sidenav?.close();
    }
  }
}
