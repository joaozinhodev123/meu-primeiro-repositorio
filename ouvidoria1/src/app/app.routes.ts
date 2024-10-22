import {provideRouter, Routes} from '@angular/router';
import { ReclamacoesListComponent } from './components/reclamacoes-list/reclamacoes-list.component';
import { ReclamacoesFormComponent } from './components/reclamacoes-form/reclamacoes-form.component';

export const routes: Routes = [
    { path: '', component: ReclamacoesListComponent},
    { path: 'add', component: ReclamacoesFormComponent },
    { path: 'edit/:id', component: ReclamacoesFormComponent }    
];

export const appRouterProviders = [provideRouter(routes)];