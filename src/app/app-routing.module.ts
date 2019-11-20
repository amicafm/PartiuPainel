import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MediadorComponent } from './mediador/mediador.component';
import { CadastrarFuncionarioComponent } from './funcionario/cadastrar/cadastrar.funcionario.component';
import { ListarFuncionarioComponent } from './funcionario/listar/listar.funcionario.component';
import { EditarFuncionarioComponent } from './funcionario/editar/editar.funcionario.component';
import { CadastrarCardapioComponent } from './cardapio/cadastrar/cadastrar.cardapio.component';
import { EditarCardapioComponent } from './cardapio/editar/editar.cardapio.component';
import { ListarCardapioComponent } from './cardapio/listar/listar.cardapio.component';
import { HomeComponent } from './widgets/home/home.component';
import { ParceriasComponent } from './widgets/parcerias/parcerias.component';
import { SobreComponent } from './widgets/sobre/sobre.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { MineracaoComponent } from './mineracao/mineracao.component';
import {AuthGuardService} from './services/guards/auth-guard.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'parcerias', component: ParceriasComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'mediador', component: MediadorComponent, canActivate: [AuthGuardService] },
  { path: 'cadastrarfuncionario', component: CadastrarFuncionarioComponent, canActivate: [AuthGuardService] },
  { path: 'listarfuncionario', component: ListarFuncionarioComponent, canActivate: [AuthGuardService] },
  { path: 'editarfuncionario/:id', component: EditarFuncionarioComponent, canActivate: [AuthGuardService] },
  { path: 'cadastrarcardapio', component: CadastrarCardapioComponent, canActivate: [AuthGuardService] },
  { path: 'editarcardapio/:id', component: EditarCardapioComponent, canActivate: [AuthGuardService] },
  { path: 'listarcardapio', component: ListarCardapioComponent, canActivate: [AuthGuardService] },
  { path: 'relatorio', component: RelatorioComponent, canActivate: [AuthGuardService] },
  { path: 'mineracao', component: MineracaoComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
