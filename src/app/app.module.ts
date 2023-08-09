import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';

import { ROUTES } from './app.routes';
import { CarrinhoService } from './carrinho.service';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { OfertasService } from './ofertas.service';
import localePt from '@angular/common/locales/pt';
import { DescricaoReduzida } from './util/descricao-reduzida.pipe';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso/ordem-compra-sucesso.component';
import { SharedComponent } from './shared/shared/shared.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzida,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [OfertasService, CarrinhoService,
     { provide: LOCALE_ID, useValue: 'pt-Br'}],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(){
    registerLocaleData(localePt, 'pt')
  }
 }
