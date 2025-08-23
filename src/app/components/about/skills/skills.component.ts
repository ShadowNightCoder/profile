import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Skill } from '../../../interfaces/interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
tab = signal<'experience' | 'skills' | 'education'>('skills');

  skills: Skill[] = [
    { label: 'Angular 8+' }, { label: 'TypeScript', short: 'TS' }, { label: 'JavaScript', short: 'JS' },
    { label: 'HTML5' }, { label: 'CSS / SCSS / Sass', short: 'SCSS' }, { label: 'Bootstrap' },
    { label: 'RESTful API', short: 'REST' }, { label: 'Node js' }, { label: 'Python' },
    { label: 'SQL / PostgreSQL', short: 'SQL' }, { label: 'Git' },
    { label: 'Docker' }, { label: 'Linux' }, { label: 'Postman' }, { label: 'VMware' },
    { label: 'PowerShell' },
    { label: 'Confluence' }
  ];
}
