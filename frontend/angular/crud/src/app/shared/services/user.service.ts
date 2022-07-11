import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/admin/connection-detail/fe335003-1d0a-4d84-8319-66e2a293e536'
  constructor(private httpClient: HttpClient) { }

  // C.R.U.D - CREATE, READ, UPDATE, DELETE
  // READ - Retorn a lista de usuarios
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl)
  }
}
