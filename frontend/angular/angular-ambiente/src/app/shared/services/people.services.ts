import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
      {firstName: 'Pessoa1', lastName: 'Sobrenome1', age:30},
      {firstName: 'Pessoa2', lastName: 'Sobrenome2', age:20},
      {firstName: 'Pessoa3', lastName: 'Sobrenome3', age:25},
      {firstName: 'Pessoa4', lastName: 'Sobrenome4', age:25}
  ];
  
  return of(peopleArray)
  }
}
