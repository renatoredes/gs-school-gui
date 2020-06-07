import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Aluno } from 'app/model/aluno';
import { AlunosService } from 'app/core/alunos.service';

@Injectable({
  providedIn: 'root'
})
export class AlunoResolverGuard implements Resolve<Aluno> {
  

  constructor (private alunoservice: AlunosService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Aluno> {

    if (route.params && route.params['id']) {
      return this.alunoservice.loadByID(route.params['id']);
    }
    return of ({ 
      id: null, 
      nome: null, 
      email: null, 
      serie: null, 
      ativo: null, 
      cep: null, 
      numero: null, 
      rua: null, 
      bairro: null, 
      cidade: null, 
      estado: null, 
      complemento: null, 
      sexo: null, 
      sobreNome: null, 
      nomeDoPai: null, 
      sobreDoPai: null, 
      nomeDaMae: null, 
      sobreDaMae: null, 
      dataNascimento: null, 
      cpf: null, 
      rg: null, 
      numeroCertidaoNascimento: null, 
      corRaca: null, 
      deficiencia: null, 
      tipo_deficiencia: null, 
      telefone: null, 
      celular: null, 
      nis: null 
    });
  }
}



  