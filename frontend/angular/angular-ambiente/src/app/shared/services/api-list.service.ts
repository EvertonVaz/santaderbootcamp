import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ApiInterface {
  info: string,
  results: Array<any>
}

@Injectable({
  providedIn: 'root'
})
export class ApiListService {
  apiURL = 'https://rickandmortyapi.com/api/character';

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<any> {
    return this.httpClient.get<any>(this.apiURL);
  }
}
