import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class OperationsArithmetiquesService {
  value : number = 0;

  constructor() { }

  addition (a : number, b : number) {
    return a + b ;
  }

  getValue () : number {
    return this.value ;
  }

  setValue (value : number) {
    this.value = value;
  }
}
