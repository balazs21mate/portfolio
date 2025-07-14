import { Component, computed, inject } from '@angular/core';
import { TitleComponent } from '../../shared/title/title.component';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  private readonly languageService = inject(LanguageService);

  title = computed(() => this.languageService.language().aboutMe.title);
  paragraphs = computed(
    () => this.languageService.language().aboutMe.paragraphs
  );
}
