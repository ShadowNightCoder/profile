import { Component, signal } from '@angular/core';
import { NgClass, CommonModule } from '@angular/common';
import { SkillsComponent } from "../skills/skills.component";
import { ExperienceComponent } from "../experience/experience.component";
import { EducationComponent } from "../education/education.component";



@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [NgClass, CommonModule, SkillsComponent, ExperienceComponent, EducationComponent],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  tab = signal<'experience' | 'skills' | 'education'>('skills');
  setTab(v: 'experience' | 'skills' | 'education') { this.tab.set(v); }
}
