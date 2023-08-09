 import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from './../../ofertas.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [ OfertasService ]
})
export class OndeFicaComponent implements OnInit{

  public ondeFica: string = '';

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService){}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((parametro: Params) => {
      this.ofertasService.getOndeFica(parametro['id'])
      .then((resposta) => { this.ondeFica = resposta})
    })
  }

}
