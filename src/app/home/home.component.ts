import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { URL } from '../app.api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit{

  public ofertas: Oferta[] = []

  constructor(private ofertasService: OfertasService){}

  ngOnInit(): void {
    this.ofertasService.getOfertas()
      .then((ofertas: Oferta[]) => { this.ofertas = ofertas })
      .catch((error: any) => console.log(error))
  }
}
