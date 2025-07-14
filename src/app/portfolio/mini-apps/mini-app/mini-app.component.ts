import { Component, input } from '@angular/core';
import { MiniApp } from './mini-app.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mini-app',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mini-app.component.html',
  styleUrl: './mini-app.component.scss',
})
export class MiniAppComponent {
  miniApp = input.required<MiniApp>();
}
