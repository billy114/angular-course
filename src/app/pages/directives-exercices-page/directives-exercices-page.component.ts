import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {projectData} from './projectdata';

@Component({
  selector: 'app-directives-exercices-page',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './directives-exercices-page.component.html',
  styleUrl: './directives-exercices-page.component.scss'
})
export class DirectivesExercicesPageComponent {
  status: string = 'All';

  setStatus(status: string) {
    this.status = status;
  }

  projects = projectData;
}
