import { Component } from '@angular/core';
import {OperationsArithmetiquesService} from '../../core/services/operations-arithmetiques.service';

@Component({
  selector: 'app-left',
  standalone: true,
  imports: [],
  templateUrl: './left.component.html',
  styleUrl: './left.component.scss'
})
export class LeftComponent {

  constructor(private operationArithmetiqueService : OperationsArithmetiquesService) {}

  getValue(){
    return this.operationArithmetiqueService.getValue();
  }

  onClick(value : number){
    this.operationArithmetiqueService.setValue(value);
  }

}
