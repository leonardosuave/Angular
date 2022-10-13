import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
    //Vai exibir apenas a primeira componente newtitle. Para exibir tudo, deve ser feito a exibição pelo app.component.html 
  `
    <app-newtitle newtitle= "Olá mundo"></app-newtitle>
    <router-outlet></router-outlet>
  `,
  
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  //template: '<router-outlet></router-outlet>' -> Simplificado - Apagar (arquivos comp.spec, .html e .scss) e Apagar templateUrl e styleUrls acima.
})
export class AppComponent {
  //Aqui é setado os valores dos métodos que serão mostrados no interpolation do app.component.html

  public title = 'Bem vindo'
}
