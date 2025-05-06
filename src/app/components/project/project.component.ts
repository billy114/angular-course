import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project : any = {};
  @Output() emitter : EventEmitter<any> = new EventEmitter();

  selected : boolean = false;

  onChange() {
    this.emitter.emit({
      selected: this.selected,
      status : this.project.status
    });
  }
}
