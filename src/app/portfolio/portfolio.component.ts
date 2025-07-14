import { Component } from '@angular/core';
import { HeaderComponent } from '../portfolio/header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MiniAppsComponent } from './mini-apps/mini-apps.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    HeaderComponent,
    LandingPageComponent,
    SkillsComponent,
    AboutMeComponent,
    MiniAppsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {}
