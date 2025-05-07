import { Component } from '@angular/core';
import {OperationsArithmetiquesService} from '../../core/services/operations-arithmetiques.service';
import {LeftComponent} from '../../components/left/left.component';
import {RightComponent} from '../../components/right/right.component';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [
    LeftComponent,
    RightComponent
  ],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent {
  result : number =  0;

  constructor(private operationArithmetiqueService : OperationsArithmetiquesService) { }

  addition(a: number, b: number) {
    this.result =  this.operationArithmetiqueService.addition(a, b);
  }
}
