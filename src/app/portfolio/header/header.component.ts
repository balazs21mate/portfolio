import { Component, computed, inject, signal } from '@angular/core';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { HeaderDesktopComponent } from './header-desktop/header-desktop.component';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderMobileComponent, HeaderDesktopComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  screenWidth = signal(window.innerWidth);
  private readonly languageService = inject(LanguageService);
  menuItems = computed(() => this.languageService.language().nav);
}
