import { Injectable, signal, effect } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly mode = signal<ThemeMode>(this.loadTheme());

  constructor() {
    effect(() => {
      const current = this.mode();
      document.body.classList.toggle('light-theme', current === 'light');
      localStorage.setItem('bb-theme', current);
    });
  }

  toggleTheme(): void {
    this.mode.update((m) => (m === 'dark' ? 'light' : 'dark'));
  }

  private loadTheme(): ThemeMode {
    const stored = localStorage.getItem('bb-theme');
    return stored === 'light' ? 'light' : 'dark';
  }
}
