import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IBooks } from './model/book';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //httpOptions = {
  //  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //}

  url = 'https://www.googleapis.com/books/v1/volumes?q=sherlock%20holmes+intitle+H.G.%20Wells+inauthor'

  constructor(private http: HttpClient) { }

  getBook(): Observable<any>{
    return this.http.get<any>(this.url)
  }
}


let bookList = [
    {
      id: '1',
      name: 'Livro 1',
      price: 1,
      quantity: 1,
      category: '',
      img: ''
    },
    {
      id: '2',
      name: 'Livro 2',
      price: 1,
      quantity: 1,
      category: '',
      img: ''
    },
    {
      id: '3',
      name: 'Livro 3',
      price: 1,
      quantity: 1,
      category: '',
      img: ''
    },
    {
      id: '4',
      name: 'Livro 4',
      price: 1,
      quantity: 1,
      category: '',
      img: ''
    },
    {
      id: '5',
      name: 'Livro 5',
      price: 1,
      quantity: 1,
      category: '',
      img: ''
    },
    {
      id: '6',
      name: 'Livro 6',
      price: 1,
      quantity: 1,
      category: '',
      img: ''
    },
  ]
