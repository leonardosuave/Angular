import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-data-binding',
  templateUrl: './interpolation-data-binding.component.html',
  styleUrls: ['./interpolation-data-binding.component.scss']
})
export class InterpolationDataBindingComponent implements OnInit {

  public mensagem:string = 'Olá, tudo bem?'
  public name:string = 'Leonardo'
  public idade:number = 26

  constructor() { }

  ngOnInit(): void {
  }

}
