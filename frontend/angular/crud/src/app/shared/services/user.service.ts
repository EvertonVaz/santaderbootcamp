import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, Result } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://api.sheety.co/2fdb825e83a9b2cd0079191a4489db32/usuarios/result'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  // C.R.U.D - CREATE, READ, UPDATE, DELETE
  // READ - Retorn a lista de usuarios
  getUsers(): Observable<Result> {
    return this.httpClient.get<Result>(this.apiUrl)
  }

  // POST(CREATE): Salva um novo usuario
  postUser(user: User): Observable<Result> {
    return this.httpClient.post<Result>(this.apiUrl, user, this.httpOptions)
  }

  // DELETE: Exclui o usuario
  deleteUser(id: number): Observable<Result> {
    return this.httpClient.delete<Result>(`${this.apiUrl}/${id}`)
  }

  // UPDATE
  updateUser(id: string, user:User): Observable<Result> {
    return this.httpClient.put<Result>(`${this.apiUrl}/${id}`, user, this.httpOptions);
  }

  // retorna um unico usuario
  getUser(id: string) :Observable <Result> {
    return this.httpClient.get<Result>(`${this.apiUrl}/${id}`)
  }
}
