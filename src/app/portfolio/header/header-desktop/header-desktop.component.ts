import { Component, inject, input, signal } from '@angular/core';
import { NavItem } from '../header.model';
import { LanguageService } from '../../language.service';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-header-desktop',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './header-desktop.component.html',
  styleUrl: './header-desktop.component.scss',
})
export class HeaderDesktopComponent {
  private readonly languageService = inject(LanguageService);
  menuItems = input.required<NavItem[]>();

  activeMenuItemRef = signal<string>('#home');

  onChangeEnglish() {
    this.languageService.toogleEnglish(true);
  }

  onChangeHungarian() {
    this.languageService.toogleEnglish(false);
  }

  onMenuItemClicked(href: string) {
    this.activeMenuItemRef.set(href);
  }
}
