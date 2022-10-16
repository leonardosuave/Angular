import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  ` <app-interpolation-data-binding></app-interpolation-data-binding>
    <app-diretivas-estruturais></app-diretivas-estruturais>
    <app-diretivas-atributos></app-diretivas-atributos>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Template-Data-Binding';
}
