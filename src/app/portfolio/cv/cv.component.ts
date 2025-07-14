import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent {
  private readonly languageService = inject(LanguageService);

  buttonTexts = computed(() => this.languageService.language().cvButtons);
}
