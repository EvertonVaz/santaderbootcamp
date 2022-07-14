import { Component, OnInit } from '@angular/core';
import { Book, IBooks } from './model/book';
import { ProductService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  livros: any[] = []  

  constructor(private productService: ProductService) {
   }

  ngOnInit(): void {
    this.productService.getBook().subscribe(results => {
      results.items.forEach((element: any) => {
        this.livros.push(element.volumeInfo)
      });
      console.log(this.livros)
    })    
  }

}
