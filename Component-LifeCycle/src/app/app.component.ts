import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
    //Vai exibir apenas a primeira componente newtitle. Para exibir tudo, deve ser feito a exibição pelo app.component.html 
    `<app-newtitle newtitle= "Olá mundo"></app-newtitle>
    {{valor}}
    <button (click)="adicionar()">Adicioanr</button>
    <br>
    <app-newtitle *ngIf="destruir"></app-newtitle>
    <br>
    <button (click)="destruirComponent()">Destruir componente</button>
    <router-outlet></router-outlet>`,
  
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  //template: '<router-outlet></router-outlet>' -> Simplificado - Apagar (arquivos comp.spec, .html e .scss) e Apagar templateUrl e styleUrls acima.
})
export class AppComponent implements DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  //Aqui é setado os valores dos métodos que serão mostrados no interpolation do app.component.html

  public title = 'Bem vindo'
  public valor: number = 25
  public destruir: boolean = true

  constructor() {
  }

  public adicionar(): number{
    return this.valor +=1
  }
  public destruirComponent() {
    this.destruir = false
  }

  ngDoCheck(): void {
    console.log('ngDoCheck()')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit()')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked()')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit()')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked()')
  }
}
