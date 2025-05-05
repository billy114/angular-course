import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {QuizzComponent} from '../../components/quizz/quizz.component';

@Component({
  selector: 'app-binding-exercices-page',
  standalone: true,
  imports: [
    FormsModule,
    QuizzComponent
  ],
  templateUrl: './binding-exercices-page.component.html',
  styleUrl: './binding-exercices-page.component.scss'
})
export class BindingExercicesPageComponent {
  inputName : string = "";
  inputAge : number = 0;
  name : string = "";
  age : number = 0;
  a : number = 0;
  b : number = 0;
  result : number = 0;

  onClick() : void {
    this.name = this.inputName;
    this.age = this.inputAge;
  }

  addition() : void  {
    this.result = this.a + this.b ;
  }

  getSomme (a : number, b : number) : number {
    return a + b ;
  }
}
