import { Component, computed, inject } from '@angular/core';
import { TitleComponent } from '../../shared/title/title.component';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  private readonly languageService = inject(LanguageService);

  jobTitle = computed(() => this.languageService.language().jobTitle);
}
