import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  text = 'Qualquer texto'
  buttonText = 'Clique?'
  mudarNome = 'mudar nome?'
  textRed = false
  bgColor = ""
  textInput = ''
  number = 0
  imageUrl = 'https://picsum.photos/300/300'
  imageDesc = 'Essa é uma imagem'
  destroi = false

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome() {
    return this.text
  }

  clicouImagem() {
    this.text = 'Clicou na imagem?'
    console.log('clicou aqui')
  }

  clicouBotao(value: any) {
    this.textRed = true
    this.bgColor = 'green'
    console.log('botao')
  }

  mudaNomeBotao() {
    this.buttonText = 'clicou'
    this.mudarNome = 'clicou'
  }

  clicouNoFilho(text: string){
    console.log(text)
  }

  incrementa(){
    this.number++
  }

  destroyComponent(){
    this.destroi = true
  }
}
