import { Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-newtitle',
  templateUrl: './newtitle.component.html',
  styleUrls: ['./newtitle.component.scss']
})
export class NewtitleComponent implements OnInit, OnChanges {
  
  //Métodos
  //TS é tipádo, então deve passar o tipo do dado (string, number...)
  @Input() public newtitle: string = "Bem vindo denovo" //Input para identificar dado externo.

  constructor() { }

  //Eventos de ciclo de vida abaixo:

  ngOnInit(): void {
    console.log('Exemplo de ngOnInit()')
    setTimeout(() => {
      console.log('Exemplo de ngOnInit() com mensagem dentro de um setTimeout de 5s')
    }, 5000);
  }

  ngOnChanges(): void {
    alert('"Bem vindo denovo" foi alterado para "Olá Mundo"')
  }

}
