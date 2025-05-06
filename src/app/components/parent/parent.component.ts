import {Component, ViewChild} from '@angular/core';
import {EnfantComponent} from '../enfant/enfant.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    EnfantComponent,
    FormsModule
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  interepteur : boolean = false;
  data : string = "some data !!"
  somme = 0;

  student1 : any = {
    name : "David",
    age : 20,
  }

  student2 : any = {
    name : "Sarah",
    age : 22,
  }

  @ViewChild('enfantRef') enfantComponent! : EnfantComponent ;
  onClick (){
    this.enfantComponent.incrementCpt();
  }

  swichInterepteur() : void{
    this.interepteur = !this.interepteur;
  }

  CalculSomme(value : number){
    this.somme += value;
  }

}
