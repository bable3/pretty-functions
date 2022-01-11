import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Data } from './data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public data = new BehaviorSubject<Data>({
    background: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
    filename: 'helloWorld.js',
    code: `function helloWorld() {
  // the hello world program
  console.log('Hello World');
}`,
    minWidth: 40,
  });
  currentData = this.data.asObservable();

  constructor() {}
  changeData(data: Data) {
    this.data.next(data);
  }
}
