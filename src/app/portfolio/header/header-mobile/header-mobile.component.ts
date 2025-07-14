import { Component, inject, input, signal } from '@angular/core';
import { NavItem } from '../header.model';
import { LanguageService } from '../../language.service';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss',
})
export class HeaderMobileComponent {
  private readonly languageService = inject(LanguageService);
  toggleNav = signal(false);
  menuItems = input.required<NavItem[]>();

  activeMenuItemRef = signal<string>('#home');

  onToggleNav() {
    this.toggleNav.set(!this.toggleNav());
  }

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
