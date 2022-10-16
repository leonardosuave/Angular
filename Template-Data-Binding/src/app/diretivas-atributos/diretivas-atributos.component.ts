import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  //ngClass
  public valor: boolean = true;

  //ngStyle
  public heightPx: string = "20px";
  public backgroudColor: string = "red"

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if(this.valor) {
        this.valor = false
      } else {
        this.valor = true
      }

      if(this.heightPx == "20px") {
        this.heightPx = "50px"
        this.backgroudColor = "blue"
      } else {
        this.heightPx = "20px"
        this.backgroudColor = "red"
      }
    }, 2000)

  }

}
