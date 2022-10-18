import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  //@Input() vai receber dados
  //Permite insedir dados em um atributo desse mesmo nome quando adicionado na component
  @Input() public contador: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
