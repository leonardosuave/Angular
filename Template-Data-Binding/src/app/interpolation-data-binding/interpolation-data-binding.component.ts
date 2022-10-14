import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-data-binding',
  templateUrl: './interpolation-data-binding.component.html',
  styleUrls: ['./interpolation-data-binding.component.scss']
})
export class InterpolationDataBindingComponent implements OnInit {

  //Interpolation
  public mensagem:string = 'Olá, tudo bem?'
  public name:string = 'Leonardo'
  public idade:number = 26

  //Property Binding
  public checkedDisabled:boolean = true

  //Event Binding
  public alertaInfo(valor: MouseEvent) {
    console.log(valor) // Mostra os eventos do MouseEvent quando clicado no botão.
  }

  public position: {x: number, y: number} = {x: 0, y: 0}
  public mouseMoveTest(valor: MouseEvent) {
    //console.log(valor) -> Mostra o evento do mouse quando arrastado sobre a imagem vermelha.
    this.position.x = valor.offsetX
    this.position.y = valor.offsetY
  }

  constructor() { }

  ngOnInit(): void {
  }

}
