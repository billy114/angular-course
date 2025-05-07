import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
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
export class EnfantComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor() {
    console.log("EnfantComponent constructor");
  }

  ngOnInit(): void {
    console.log("EnfantComponent ngOnInit");
  }

  ngOnDestroy(): void {
    console.log("EnfantComponent ngOnDestroy");
  }

  ngAfterViewInit(): void {
    console.log("EnfantComponent ngAfterViewInit");
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("EnfantComponent ngOnChanges", changes);
  // }

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
