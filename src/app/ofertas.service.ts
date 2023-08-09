import { HttpClient } from '@angular/common/http';
import { Oferta } from "./shared/oferta.model";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { URL } from './app.api';
import { Observable } from 'rxjs';


@Injectable()
export class OfertasService {

  constructor(private http: HttpClient) {}

  public ofertas: Array<Oferta> = [
      {
        id: 1,
        categoria: "restaurante",
        titulo: "Super Burger",
        descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
        anunciante: "Original Burger",
        valor: 29.90,
        destaque: true,
        imagens: [
          {url: "/assets/ofertas/1/img1.jpg"},
          {url: "/assets/ofertas/1/img2.jpg"},
          {url: "/assets/ofertas/1/img3.jpg"},
          {url: "/assets/ofertas/1/img4.jpg"}
        ]
      },
      {
        id: 2,
        categoria: "restaurante",
        titulo: "Cozinha Mexicana",
        descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
        anunciante: "Mexicana",
        valor: 32.90,
        destaque: true,
        imagens: [
          {url: "/assets/ofertas/2/img1.jpg"},
          {url: "/assets/ofertas/2/img2.jpg"},
          {url: "/assets/ofertas/2/img3.jpg"},
          {url: "/assets/ofertas/2/img4.jpg"}
        ]

      },
      {
        id: 4,
        categoria: "diversao",
        titulo: "Estância das águas",
        descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
        anunciante: "Estância das águas",
        valor: 31.90,
        destaque: true,
        imagens: [
          {url: "/assets/ofertas/3/img1.jpg"},
          {url: "/assets/ofertas/3/img2.jpg"},
          {url: "/assets/ofertas/3/img3.jpg"},
          {url: "/assets/ofertas/3/img4.jpg"},
          {url: "/assets/ofertas/3/img5.jpg"},
          {url: "/assets/ofertas/3/img6.jpg"}
        ]
      }
    ]

    public getOfertas(): Promise<Oferta[]> {
      return this.http.get<Oferta[]>(`${URL}/ofertas?destaque=true`)
        .pipe(map((resposta: any) => resposta))
        .toPromise();
    }

    public getOfertasPorCategorias(categoria: string): Promise<Oferta[]> {
      return this.http.get<Oferta[]>(`${URL}/ofertas?categoria=${categoria}`)
        .pipe(
          map((resposta: any) => resposta)
        )
        .toPromise();
    }

    public getOfertasPorCategoria(diversao: string): Promise<Oferta[]> {
      return this.http.get<Oferta[]>(`${URL}/ofertas?categoria=${diversao}`)
        .pipe(
          map((resposta: any) => resposta)
        )
        .toPromise();
    }

    public getOfertasPorId(id: number): Promise<Oferta[]> {
      return this.http.get<Oferta[]>(`${URL}/ofertas?id=${id}`)
        .pipe(
          map((resposta: any) => resposta)
        )
        .toPromise();
    }

    public getComoUsarOfertaPorId(id: number): Promise<string>{
      return this.http.get<Oferta[]>(`${URL}/como-usar?id=${id}`)
        .pipe(
          map((resposta: any) => resposta[0].descricao)
        )
        .toPromise();
    }

    public getOndeFica(id: number): Promise<string>{
      return this.http.get<Oferta[]>(`${URL}/onde-fica?id=${id}`)
        .pipe(
          map((resposta: any) => resposta[0].descricao)
        )
        .toPromise();
    }


    public pesquisaOfertas(termo: string): Observable<Oferta[]> {
      return this.http.get<Oferta[]>(`${URL}/ofertas?descricao_oferta_like=${termo}`)
        .pipe(
          map((resposta: any) => resposta)
        );
    }
}
