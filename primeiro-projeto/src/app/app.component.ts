import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

  //template: '<router-outlet></router-outlet>' -> Simplificado - Apagar (arquivos comp.spec, .html e .scss) e Apagar templateUrl e styleUrls acima.
})
export class AppComponent {
  //Aqui é setado os valores dos métodos que serão mostrados no interpolation do app.component.html

  public title = 'Bem vindo'
}
