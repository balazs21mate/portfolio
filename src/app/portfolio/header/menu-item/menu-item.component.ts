import { Component, input, output } from '@angular/core';
import { NavItem } from '../header.model';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  menuItem = input.required<NavItem>();
  isActive = input.required<boolean>();

  itemClicked = output<string>();

  onItemClick() {
    this.itemClicked.emit(this.menuItem().href);
  }
}
