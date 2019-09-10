import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar.funcionario.component.html',
  styleUrls: ['./listar.funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {
  public listarFuncionarios: Funcionario[];

  constructor() { }

  ngOnInit() {
    //this.funcionarioService.listarFuncionarios().subscribe(funcionarioss => 
    //  {this.listarFuncionarios = funcionarios;});
  }

  excluirFuncionario(id: number){
    //this.funcionarioService.deletarItemById(id);
  }

}
