import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newtitle',
  templateUrl: './newtitle.component.html',
  styleUrls: ['./newtitle.component.scss']
})
export class NewtitleComponent implements OnInit {
  
  //Métodos
  //TS é tipádo, então deve passar o tipo do dado (string, number...)
  public newtitle: string = "Bem vindo denovo"

  constructor() { }

  ngOnInit(): void {
  }

}
