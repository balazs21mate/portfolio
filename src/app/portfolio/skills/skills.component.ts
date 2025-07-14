import { Component, computed, inject, signal } from '@angular/core';
import { TitleComponent } from '../../shared/title/title.component';
import { SkillComponent } from './skill/skill.component';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TitleComponent, SkillComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  private readonly languageService = inject(LanguageService);
  skills = computed(() => this.languageService.language().skills.skillsArray);

  skillContentName = signal<string>('');

  title = computed(() => this.languageService.language().skills.title);

  onChangeSkillContentName(name: string) {
    this.skillContentName.set(name);
  }
}
