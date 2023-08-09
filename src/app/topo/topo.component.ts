// topo.component.ts
import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  public oferta2: Oferta[] = []
  ofertas: Observable<Oferta[]> = new Observable<Oferta[]>();
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa.pipe(debounceTime(1000),
      distinctUntilChanged(),switchMap((termo: string) => {
        if (termo.trim() === '') {
          return of([])
        }
        return this.ofertasService.pesquisaOfertas(termo);
      })
    )
  }

  pesquisar(termo: string): void {
    this.subjectPesquisa.next(termo)
  }

  limpaPesquisa(): void {
    this.subjectPesquisa.next('')
  }


}

