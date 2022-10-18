import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  //Output vai transmitir(emitir) dados para outra componente resgatar(pegar) estes dados
  @Output() public enviarDates = new EventEmitter();

  public list: Array<{name: string, age: number}> = [
    {name: 'Leonardo', age: 26},
    {name: 'Tassiane', age: 29},
    {name: 'Judite', age: 2}
  ]  
  constructor() { }

  ngOnInit(): void {
  }

  public getDates(event: number) {

    //Vai emitir o nó da lista clicado e o setDates vai capturar através do $event
    this.enviarDates.emit(this.list[event])
  }

}
