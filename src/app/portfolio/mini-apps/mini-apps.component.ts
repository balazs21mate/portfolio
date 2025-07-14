import { Component, computed, inject } from '@angular/core';
import { TitleComponent } from '../../shared/title/title.component';
import { MiniAppComponent } from './mini-app/mini-app.component';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-mini-apps',
  standalone: true,
  imports: [TitleComponent, MiniAppComponent],
  templateUrl: './mini-apps.component.html',
  styleUrl: './mini-apps.component.scss',
})
export class MiniAppsComponent {
  private readonly languageService = inject(LanguageService);

  title = computed(() => this.languageService.language().miniApps.title);
  miniApps = computed(() => this.languageService.language().miniApps.apps);
}
