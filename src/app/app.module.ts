import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule} from './login/login.module'
import { OrcamentoModule } from './orcamento/orcamento.module'
import { AcompanhamentoModule } from './acompanhamento/acompanhamento.module'
import { MenuComponent } from './shared/menu/menu.component';
import {CadastroModule} from 'src/app/cadastro/cadastro.module'
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    OrcamentoModule,
    AcompanhamentoModule,
    AppRoutingModule,
    CadastroModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
