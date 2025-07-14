import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  isShowInfo = signal<boolean>(false);

  message = input.required<string>();
  leftText = input<boolean>(false);
  wideText = input<boolean>(false);

  ShowInfo() {
    this.isShowInfo.set(true);
  }

  HideInfo() {
    this.isShowInfo.set(false);
  }
}
