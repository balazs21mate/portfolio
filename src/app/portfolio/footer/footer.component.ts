import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../language.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private readonly languageService = inject(LanguageService);

  footerText = computed(() => this.languageService.language().footerText);
}
