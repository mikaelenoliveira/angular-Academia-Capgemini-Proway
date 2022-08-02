import { ErrorsComponent } from './errors/errors.component';
import { AuthGuardClienteService } from './auth-guard-cliente.service';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuardAdm } from './auth-guard-adm.service';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { LoginComponent } from './login/login.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {
    path: 'consulta',
    component: ConsultaComponent,
    canActivate: [AuthGuardClienteService],

  },
  {
    path: 'cadastro',
    component: CadastroComponent,
    canActivate: [AuthGuardAdm]
  },
  {
    path: 'contato/:idcontato',
    component: EdicaoComponent
  },
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'usuario',
    component: CadastroUsuarioComponent
  },
  {
    path: 'erros',
    component: ErrorsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
