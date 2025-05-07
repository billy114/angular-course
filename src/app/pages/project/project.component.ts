import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import {ProjectService} from '../../core/services/project.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {
  id : number = -1;
  project : any = {};

  constructor(
    private route : ActivatedRoute,
    private projectService : ProjectService) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.id = +params['id'];
        this.project = this.projectService.getProjectById(this.id);
      }
    )
  }

}
