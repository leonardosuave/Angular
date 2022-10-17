import { Component } from '@angular/core';

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
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Template-Data-Binding';
}
