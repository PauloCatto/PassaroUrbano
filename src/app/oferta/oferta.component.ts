import { CarrinhoService } from './../carrinho.service';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { URL } from '../app.api';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
   providers: [OfertasService]
})

export class OfertaComponent implements OnInit, OnDestroy {

  public ofertas: Oferta[] = []

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnDestroy(): void {}

  async ngOnInit(): Promise<void> {
    try {
      this.route.params.subscribe(async (parametros: Params) => {
        this.ofertas = await this.ofertasService.getOfertasPorId(parametros['id']);
      })
    } catch (error) {
      console.log(error);
    }
  }

  public adicionarItemCarrinho(ofertas: Oferta): void {
    this.carrinhoService.incluirItens(ofertas)
  }
}

