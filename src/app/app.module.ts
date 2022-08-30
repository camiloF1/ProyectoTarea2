import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { GatoComponent } from './components/gato/gato.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    PruebaComponent,
    GatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
