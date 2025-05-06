import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {projectData} from './projectdata';
import {ProjectComponent} from '../../components/project/project.component';

@Component({
  selector: 'app-directives-exercices-page',
  standalone: true,
  imports: [
    NgClass,
    ProjectComponent
  ],
  templateUrl: './directives-exercices-page.component.html',
  styleUrl: './directives-exercices-page.component.scss'
})
export class DirectivesExercicesPageComponent {
  status: string = 'All';
  cpt : number = 0;
  cptCompleted : number = 0;
  cptPending : number = 0;
  cptDelay : number = 0;

  setStatus(status: string) {
    this.status = status;
  }

  updateCpt (data : any) : void {
    let selected = data.selected;
    let status = data.status;

    if (selected) {
      this.cpt += 1;
      switch (status) {
        case 'Completed':
          this.cptCompleted++;
          break;

        case 'Pending':
          this.cptPending++;
          break;
        case 'Delay' :
          this.cptDelay++;
          break;
      }
    } else {
      this.cpt -= 1;
      switch (status) {
        case 'Completed':
          this.cptCompleted--;
          break;

        case 'Pending':
          this.cptPending--;
          break;
        case 'Delay' :
          this.cptDelay--;
          break;
      }
    }
  }
  
  projects = projectData;
}
