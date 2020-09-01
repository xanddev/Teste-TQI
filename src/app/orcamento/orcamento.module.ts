import { CadastroComponent } from './../cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrcamentoComponent } from './orcamento.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OrcamentoComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    OrcamentoComponent
  ]
})
export class OrcamentoModule { }
