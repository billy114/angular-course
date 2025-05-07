import { Component } from '@angular/core';
import {OperationsArithmetiquesService} from '../../core/services/operations-arithmetiques.service';

@Component({
  selector: 'app-right',
  standalone: true,
  imports: [],
  templateUrl: './right.component.html',
  styleUrl: './right.component.scss'
})
export class RightComponent {
  constructor(private operationArithmetiqueService : OperationsArithmetiquesService) {}

  getValue(){
    return this.operationArithmetiqueService.getValue();
  }

  onClick(value : number){
    this.operationArithmetiqueService.setValue(value);
  }
}
