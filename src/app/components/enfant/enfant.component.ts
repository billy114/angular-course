import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-enfant',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.scss'
})
export class EnfantComponent {
  @Input() data : string = "";
  @Input() student : any = {};
  @Output() emitter : EventEmitter<any> = new EventEmitter();
  @Output() dataEmitter : EventEmitter<number> = new EventEmitter();

  value:number = 0;
  cpt : number = 0;

  incrementCpt() : void {
    this.cpt += 1;
  } ;

  signlerLeParent() : void {
    this.emitter.emit();
  }

  sendData(value : number){
    this.dataEmitter.emit(value);
  }
}
