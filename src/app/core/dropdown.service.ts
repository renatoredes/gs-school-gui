import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadoBr } from 'app/model/estado';
import { Cidade } from 'app/model/cidade';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) {}

  getEstadosBr() {
    return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json');
  }

  getCidades(idEstado: number) {
    return this.http.get<Cidade[]>('assets/dados/cidades.json')
    .pipe(
      // tslint:disable-next-line:triple-equals
      map((cidades: Cidade[]) => cidades.filter(c => c.estado == idEstado))
    );
  }
}
