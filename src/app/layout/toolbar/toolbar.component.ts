import { Component, inject, output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ThemeService } from '../../core';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  protected themeService = inject(ThemeService);
  menuToggle = output<void>();

  get themeIcon(): string {
    return this.themeService.mode() === 'dark' ? 'light_mode' : 'dark_mode';
  }
}
