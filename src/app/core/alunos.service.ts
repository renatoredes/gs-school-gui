import { Injectable } from "@angular/core";
import { tap, delay, take } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "environments/environment";

import { Aluno } from "app/model/aluno";

@Injectable({
  providedIn: "root",
})
export class AlunosService {
  private readonly API = `${environment.API}alunos`;

  constructor(private http: HttpClient) {}

  listAlunoService() {
    return this.http.get<Aluno[]>(this.API).pipe(delay(2000), tap(console.log));
  }

  loadByID(id) {
    return this.http.get<Aluno>(`${this.API}/${id}`).pipe(take(1));
  }
  createAlunoService(alunos) {
    return this.http.post(this.API, alunos).pipe(take(1));
  }
  update(Aluno) {
    return this.http.put(`${this.API}/${Aluno.id}`, Aluno).pipe(take(1));
  }

  remove(id) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
  public deletarAlunoExemplo(id: string): Observable<any> {
    return this.http.delete(this.API + "/" + id);
  }
}
