import { Component, signal } from '@angular/core';
import { Item } from '../../../interfaces/interface';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
tab = signal<'experience' | 'skills' | 'education'>('skills');


  education: Item[] = [
    {
      period: 'In progress',
      title: 'B.Sc. Computer Science',
      sub: 'The Open University of Israel',
      summary: 'Coursework includes systems programming in C, logic, and linear algebra; studied alongside work and projects.'
    },
    {
      period: '—',
      title: 'Angular – The Complete Guide',
      sub: 'Udemy',
      summary: 'Deepened Angular patterns and best practices for production UI development.'
    },
    {
      period: '3 months',
      title: 'Biss MATZOV',
      sub: 'IDF',
      summary: 'Intensive program covering computer-science topics and practical engineering exposure.'
    },
    {
      period: '2 months',
      title: 'Lahav Premilitary Academy',
      sub: 'IDF',
      summary: 'Foundations of computing, hands-on exercises, and theoretical grounding.'
    },
    {
      period: '—',
      title: 'Python: Skilled to Expert',
      sub: 'IDF Training Program',
      summary: 'Completed during military service. Focused on scripting and automation to support DevOps, backend integration, and secure army workflows.'
    },
    {
      period: '—',
      title: 'Microsoft Azure Cloud',
      sub: 'Microsoft Certification / Training',
      summary: 'Hands-on training with Azure Virtual Machines and App Registration for authentication, deployment, and cloud infrastructure fundamentals.'
    }

  ];

}
