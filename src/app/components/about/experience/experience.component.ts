import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Item } from '../../../interfaces/interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
 tab = signal<'experience' | 'skills' | 'education'>('skills');


  experience: Item[] = [
    {
      period: '2 years',
      title: 'Front-End Developer (IDF, Unit 501 – MATZOV)',
      sub: 'Military Service',
      summary: 'Built a secure, mobile-first Angular app with TypeScript, Angular Material, SCSS/Sass, and Bootstrap. Integrated a Django backend via REST APIs, implemented Microsoft login with Azure App Registration, and collaborated in a full-stack team with code quality and security constraints.'
    },
    {
      period: '8 months',
      title: 'DevOps Engineer (IDF)',
      sub: 'Military Service',
      summary: 'Created deployment and automation scripts, improved CI/CD flows and monitoring, and supported developers across secure army environments using Docker, Linux, RabbitMQ, Tomcat, VMware, and PowerShell.'
    },
    {
      period: '1 year',
      title: 'Technical Support Specialist',
      sub: 'Partner Communications',
      summary: 'Tier-1/2 support for consumer and SMB customers. Troubleshot connectivity, device, and account issues; documented in CRM; guided users through configurations; emphasized clear communication and high first-call resolution.'
    }
  ];
}
