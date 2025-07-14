import { AboutMe } from './about-me/about-me.model';
import { Contact } from './contact/contact.model';
import { NavItem } from './header/header.model';
import { MiniApp } from './mini-apps/mini-app/mini-app.model';
import { Skill } from './skills/skill.model';

interface MiniApps {
  title: string;
  apps: MiniApp[];
}

interface Skills {
  title: string;
  skillsArray: Skill[];
}

interface CvButtons {
  backButton: string;
  downloadButton: string;
}

export interface Language {
  nav: NavItem[];
  jobTitle: string;
  aboutMe: AboutMe;
  skills: Skills;
  miniApps: MiniApps;
  contact: Contact;
  footerText: string;
  cvButtons: CvButtons;
}

export interface Languages {
  hungarian: Language;
  english: Language;
}
