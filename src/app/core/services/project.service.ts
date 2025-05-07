import { Injectable } from '@angular/core';
import {projectData} from '../../pages/directives-exercices-page/projectdata';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects = projectData
  constructor() { }

  getProjectById(id : number) : any {
    return this.projects.find(project => project.id === id);
  }

  getProjects() : Array<any> {
    return this.projects;
  }
}
