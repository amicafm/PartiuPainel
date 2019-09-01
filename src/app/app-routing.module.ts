import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MediadorComponent } from './mediador/mediador.component';
import { CadastrarFuncionarioComponent } from './funcionario/cadastrar/cadastrar.funcionario.component';
import { ListarFuncionarioComponent } from './funcionario/listar/listar.funcionario.component';
import { EditarFuncionarioComponent } from './funcionario/editar/editar.funcionario.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'mediador', component: MediadorComponent },
  { path: 'cadastrarfuncionario', component: CadastrarFuncionarioComponent },
  { path: 'listarfuncionario', component: ListarFuncionarioComponent },
  { path: 'editarfuncionario', component: EditarFuncionarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
