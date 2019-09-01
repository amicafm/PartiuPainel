import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MediadorComponent } from './mediador/mediador.component';
import { CadastrarFuncionarioComponent } from './funcionario/cadastrar/cadastrar.funcionario.component';
import { ListarFuncionarioComponent } from './funcionario/listar/listar.funcionario.component';
import { EditarFuncionarioComponent } from './funcionario/editar/editar.funcionario.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'painel', component: MediadorComponent },
  { path: 'funcionarios', component: ListarFuncionarioComponent },
  { path: 'cadastroFuncionarios', component: CadastrarFuncionarioComponent },
  { path: 'editaFuncionario', component: EditarFuncionarioComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/Login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MediadorComponent,
    CadastrarFuncionarioComponent,
    ListarFuncionarioComponent,
    EditarFuncionarioComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent], 
  exports: []
})
export class AppModule { }
