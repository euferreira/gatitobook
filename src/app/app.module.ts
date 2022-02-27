import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CabecalhoModule} from "./componentes/cabecalho/cabecalho.module";
import { RodapeComponent } from './componentes/rodape/rodape.component';
import {AutenticacaoModule} from "./autenticacao/autenticacao.module";

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CabecalhoModule,
    AutenticacaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
