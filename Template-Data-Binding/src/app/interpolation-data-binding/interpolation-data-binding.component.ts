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

  constructor() { }

  ngOnInit(): void {
  }

}
