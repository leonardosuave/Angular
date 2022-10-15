import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Importado da documentação para ler 
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationDataBindingComponent } from './interpolation-data-binding/interpolation-data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationDataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
