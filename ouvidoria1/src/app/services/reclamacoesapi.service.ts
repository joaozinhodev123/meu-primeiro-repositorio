import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Reclamacao } from '../models/reclamacao';

@Injectable({
  providedIn: 'root'
})
export class ReclamacoesapiService {

  //usado para controlar manualmente o próximo id
  private proximoId: number = 4;

  private reclamacoes: Reclamacao[] = [
    { id: 1, autor: 'Daniel', descricao: 'Sem papel no banheiro'},
    { id: 2, autor: 'Lucas', descricao: 'Sem leite'},
    { id: 3, autor: 'Arthur', descricao: 'Sem brinquedo'}
  ];

  getReclamacoes(): Observable<Reclamacao[]> {
    return of(this.reclamacoes);
  }

  addReclamacao(reclamacao: Reclamacao): void {
    reclamacao.id = this.proximoId++; //vai receber 4 (inicialmente e depois vai para 5, etc)
    this.reclamacoes.push(reclamacao);
  }

  updateReclamacao(product: Reclamacao): void {
    const index = this.reclamacoes.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.reclamacoes[index] = product;
    }
  }

  deleteReclamacao(id: number) {
    console.log('Reclamações existentes:', this.reclamacoes);
    this.reclamacoes = this.reclamacoes.filter((reclamacao) => reclamacao.id !== id);
    console.log('Current products:', this.reclamacoes);
  }

}
