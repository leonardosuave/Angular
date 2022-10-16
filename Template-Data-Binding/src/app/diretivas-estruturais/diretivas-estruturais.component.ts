import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  //*ngIf
  public condition: boolean = true
  public conditionClick: boolean = true

  //*ngFor
  public name:string = ''
  public idade:number = 0

  public list: Array<{name: string, idade: number}> = [
    {name: 'Leonardo', idade: 26},
    {name: 'Tassiane', idade: 29},
    {name: 'Judite', idade: 2}
  ]

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

  public onClickAdd() {
    this.list.push({name: this.name, idade: this.idade})
    this.name = ''
    this.idade = 0
  }

  public onClickEventDelete(event: number) {
    this.list.splice(event, 1)
  }

}
