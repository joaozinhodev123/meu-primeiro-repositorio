import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Reclamacao } from '../../models/reclamacao';
import { ReclamacoesapiService } from '../../services/reclamacoesapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reclamacoes-list',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './reclamacoes-list.component.html',
  styleUrl: './reclamacoes-list.component.scss'
})
export class ReclamacoesListComponent {

  reclamacoes: Reclamacao[] = [];

  constructor(private reclamacaoService: ReclamacoesapiService, private router: Router) {
    this.reclamacaoService.getReclamacoes().subscribe(data => this.reclamacoes = data);
  }

  deleteReclamacao(id: number): void {
    this.reclamacaoService.deleteReclamacao(id);
    console.log('Após a exclusão, lista de reclamações: ', this.reclamacoes);
    this.reclamacaoService.getReclamacoes().subscribe(data => {
      this.reclamacoes = data;
      console.log('Produtos atualizados:', this.reclamacoes);
    });
  }

  editReclamacao(reclamacao: Reclamacao): void {
    this.router.navigate(['/edit', reclamacao.id]);
  }

  addReclamacao(): void {
    this.router.navigate(['/add']);
  }
}
