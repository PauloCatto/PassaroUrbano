import { CarrinhoService } from '../carrinho.service';
import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemCarrinho } from '../shared/item-carrinho.models';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService],
})
export class OrdemCompraComponent implements OnInit {
  public idPedidoCompra: number | undefined;
  public itensCarrinho: ItemCarrinho[] = [];
  public carrinhoVazio: boolean = true;

  public formulario: FormGroup = new FormGroup({
    endereco: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
    ]),
    numero: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(5),
      Validators.pattern('^[0-9]*$')
    ]),
    complemento: new FormControl('', [Validators.required]),
    formaPagamento: new FormControl('', [Validators.required]),
  });

  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.exibirItens();
    this.carrinhoVazio = this.carrinhoService.exibirItens().length === 0;
  }

  public confirmarCompra(): void {
    if (this.formulario.status === 'INVALID') {
      this.formulario.get('endereco')?.markAsTouched();
      this.formulario.get('numero')?.markAsTouched();
      this.formulario.get('complemento')?.markAsTouched();
      this.formulario.get('formaPagamento')?.markAsTouched();

    } else {

      if (this.carrinhoService.exibirItens().length === 0) {
        alert('Seu carrinho está vazio, para prosseguir adicione itens no carrinho.');

      } else {

        let pedido: Pedido = new Pedido(
          this.formulario.value.endereco,
          this.formulario.value.numero,
          this.formulario.value.complemento,
          this.formulario.value.formaPagamento,
          this.carrinhoService.exibirItens()
        );

        this.ordemCompraService
          .efetivarCompra(pedido)
          .subscribe((idPedido: number) => (this.idPedidoCompra = idPedido));
          this.carrinhoService.limparCarrinho()
      }
    }
  }

  public getTotalCarrinho(): number {
    return this.carrinhoService.totalCarrinhoCompras();
  }

  public adicionar(item: ItemCarrinho): void {
    this.carrinhoService.adicionarQuantidade(item);
  }

  public remover(item: ItemCarrinho): void {
    this.carrinhoService.removerQuantidade(item);
  }
}
