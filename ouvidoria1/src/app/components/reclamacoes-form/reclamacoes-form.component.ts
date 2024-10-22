import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Reclamacao } from '../../models/reclamacao';
import { ReclamacoesapiService } from '../../services/reclamacoesapi.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reclamacoes-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reclamacoes-form.component.html',
  styleUrl: './reclamacoes-form.component.scss'
})
export class ReclamacoesFormComponent {

  reclamacao: Reclamacao = { id: 0, autor: '', descricao: '' };
  isEditMode = false;

  constructor(
    private reclamacoesApiService: ReclamacoesapiService, private router: Router, private route: ActivatedRoute) {
    
      /*
       * this.route se refere a instância de ActiveRoute (para acessar info sobre a rota atual como parâmetros)
       * snapshot contém o estado atual da rota
       * paramMap contém todos os parâmetros da rota (extraídos da URL)
       */
    const id = this.route.snapshot.paramMap.get('id');

    // verifica se o valor capturado pelo parâmetro id não é null ou undefined
    if (id) {
      this.isEditMode = true; //caso tenha id, sabe-se que quer editar
      const relamacaoId = parseInt(id, 10); //converte string em número inteiro e 10 se refere-se a ser decimal (base 10)
      
      //subscribe é como assinar algo para receber atualizações.
      this.reclamacoesApiService.getReclamacoes().subscribe(relamacoes => {
        const encontrouReclamacao = relamacoes.find(p => p.id === relamacaoId);
        if (encontrouReclamacao) {
          this.reclamacao = encontrouReclamacao;
        }
      });
    }
  } //fim do construtor

  salvarReclamacao(): void {
    if (this.isEditMode) {
      this.reclamacoesApiService.updateReclamacao(this.reclamacao);
    } else {
      this.reclamacoesApiService.addReclamacao(this.reclamacao);
    }

    this.router.navigate(['/']);
  }

}
