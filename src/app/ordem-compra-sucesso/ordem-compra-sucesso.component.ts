import { Component, Input, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { ItemCarrinho } from '../shared/item-carrinho.models';

@Component({
  selector: 'app-ordem-compra-sucesso',
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrls: ['./ordem-compra-sucesso.component.css'],
  providers: [CarrinhoService]
})
export class OrdemCompraSucessoComponent implements OnInit {
  @Input() public idPedidoCompra: number | undefined;

  public itensCarrinho: ItemCarrinho[] = [];

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.exibirItens();
  }
}
