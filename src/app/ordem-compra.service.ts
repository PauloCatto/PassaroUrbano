import { Injectable } from "@angular/core";
import { Pedido } from "./shared/pedido.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { URL } from "./app.api";

@Injectable()
export class OrdemCompraService {

  constructor(private httpClient: HttpClient) {}

  public efetivarCompra(pedido: Pedido): Observable<number> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post(`${URL}/pedidos`, JSON.stringify(pedido), { headers })
      .pipe(
        map((resposta: any) => {
          return resposta.id;
        })
      );
  }
}
