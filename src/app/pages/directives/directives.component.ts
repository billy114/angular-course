import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  message : string = 'Hello World!';
  selectedColor : string = '';
  colors : string[] = ['red', 'green', 'blue'];

  students : any [] = [
    {id : 1, name:"John", email:"john@example.com"},
    {id : 2, name:"James", email:"james@example.com"},
    {id : 3, name:"Joseph", email:"joseph@example.com"},
  ]
}
