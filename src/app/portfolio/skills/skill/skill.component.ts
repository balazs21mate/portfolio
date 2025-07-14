import { Component, input, output } from '@angular/core';
import { Skill } from '../skill.model';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent {
  skill = input.required<Skill>();
  isShowContent = input<boolean>();
  clickedItem = output<string>();

  onClickItem(name: string) {
    this.clickedItem.emit(name);
  }
}
