import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() btnText = 'Clique no filho';
  @Input() btnType: string = '';
  @Output() clickChildren = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  clicou(){
    this.clickChildren.emit('clicou no filho')
  }
}
