import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  ` <app-interpolation-data-binding></app-interpolation-data-binding>
    <app-diretivas-estruturais></app-diretivas-estruturais>

    <app-diretivas-atributos>
      <h1>Aula ng-Content</h1>
      <h3>Final da aula ng-Content</h3>
    </app-diretivas-atributos>

    <app-diretivas-atributos>
      <h1>Atribuindo valor em h1 de uma nova component por ng-Content</h1>
      <h3>Final da ng-Content da nova component</h3>
    </app-diretivas-atributos>

    <app-diretivas-atributos></app-diretivas-atributos>

    <app-new-component></app-new-component>

    <app-input [contador]="addValue"></app-input>
    <button (click)="add()">Add</button>

    <ng-template [ngIf]="getDates">
      <h1>{{getDates.name}}</h1>
      <h2>{{getDates.age}}</h2>
    </ng-template>
    <app-output (enviarDates)="setDates($event)"></app-output>

    <router-outlet></router-outlet>
  `
})



export class AppComponent implements OnInit {

  //Vai inserir dados no @Input contador
  public addValue: number = 0

  public getDates: {name: string, age:number} | undefined
  

  ngOnInit(): void { 
  }
  title = 'Template-Data-Binding';

  //Vai inserir dados no @Input contator
  public add() {
    this.addValue += 1;
  }

  public setDates(event: {name: string, age: number}) {
    this.getDates = event
  }
  
}
