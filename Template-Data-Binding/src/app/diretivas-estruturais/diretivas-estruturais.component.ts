import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true
  public conditionClick: boolean = true

  constructor() { }

  ngOnInit(): void {

    //Depois de 5s vai setar condition como false e vai destruir o elemento html ou como true para cria-lo novamente.
    setInterval(() => {
      if(this.condition) {
        this.condition = false
      } else {
        this.condition = true
      }
      
    }, 2000)
  }
  
  public onClick() {
    if(this.conditionClick) {
      this.conditionClick = false
    } else {
      this.conditionClick = true
    }
  }

}
