import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {
  // tslint:disable-next-line:no-inferrable-types
  update =  new EventEmitter<number>;
  num: number = 0;


  constructor() { }

  counter() {
    this.num++;
    console.log(this.num);
    this.update.emit(this.num);
  }
}
