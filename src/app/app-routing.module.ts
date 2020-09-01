import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent} from 'src/app/cadastro/cadastro.component'
import { from } from 'rxjs';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'orcamento'},
  { path: 'login', component: LoginComponent },
  { path: 'orcamento', component: OrcamentoComponent },
  { path: 'cadastro', component: CadastroComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
