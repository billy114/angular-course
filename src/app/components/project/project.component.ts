import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    NgClass,
    FormsModule,
    RouterLink
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project : any = {};
  @Output() emitter : EventEmitter<any> = new EventEmitter();

  selected : boolean = false;

  constructor(private router : Router) {}

  onChange() {
    this.emitter.emit({
      selected: this.selected,
      status : this.project.status
    });
  }

  navigateTo(){
    this.router.navigate(['..', 'project', this.project.id]);
  }

}
