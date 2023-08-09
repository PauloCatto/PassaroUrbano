import { ItemCarrinho } from './shared/item-carrinho.models';
import { Oferta } from './shared/oferta.model';

export class CarrinhoService {
  public itens: ItemCarrinho[] = [];

  public exibirItens(): ItemCarrinho[] {
    return this.itens;
  }

  public incluirItens(ofertas: Oferta): any {
    let itemCarrinho: ItemCarrinho = new ItemCarrinho(
      ofertas.id,
      ofertas.imagens[0],
      ofertas.titulo,
      ofertas.descricao_oferta,
      ofertas.valor,
      1
    );

    let itemCarrinhoEncontrado = this.itens.find(
      (item: ItemCarrinho) => item.id === itemCarrinho.id
    );

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1;
    } else {
      this.itens.push(itemCarrinho);
    }
  }

  public totalCarrinhoCompras(): number {
    let total: number = 0;

    this.itens.map(
      (item: ItemCarrinho) => (total = total + item.valor * item.quantidade)
    );
    return total;
  }

  public adicionarQuantidade(ItemCarrinho: ItemCarrinho): void {
    let itemCarrinhoEncontrado = this.itens.find(
      (item: ItemCarrinho) => item.id === ItemCarrinho.id
    );

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1;
    }
  }

  public removerQuantidade(ItemCarrinho: ItemCarrinho): void {
    let itemCarrinhoEncontrado = this.itens.find(
      (item: ItemCarrinho) => item.id === ItemCarrinho.id
    );

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade -= 1;

      if (itemCarrinhoEncontrado.quantidade === 0) {
        this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1);
      }
    }
  }

  public limparCarrinho(): void {
    this.itens = []
  }
}
