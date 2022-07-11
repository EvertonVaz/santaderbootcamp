import { Component, OnInit } from '@angular/core';
import { ApiInterface, ApiListService } from '../../services/api-list.service';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {

  personagens: any = []

  constructor(private apiListService: ApiListService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList () {
    this.apiListService.getList().subscribe(result => {
      this.personagens = result?.results;
      console.log(this.personagens)
    })
  }
}
