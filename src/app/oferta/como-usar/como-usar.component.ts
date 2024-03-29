import { OfertasService } from './../../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit{

  public comoUsar: string = '';
  constructor( private route: ActivatedRoute, private ofertasService: OfertasService ){

  }

  ngOnInit(): void {
    this.route.parent?.params.subscribe((paramentro: Params) => {
      this.ofertasService.getComoUsarOfertaPorId(paramentro['id'])
      .then((resposta: any) => { this.comoUsar = resposta })
    })
  }

}
