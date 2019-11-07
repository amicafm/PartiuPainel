import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Router } from '@angular/router';
import { EditarFuncionarioComponent } from '../editar/editar.funcionario.component';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar.funcionario.component.html',
  styleUrls: ['./listar.funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit{
  public listarFuncionarios: Funcionario[];
  public idFuncLogado: number;


  constructor(private funcService: FuncionarioService,private router:Router) { }

  ngOnInit() {  
    this.idFuncLogado = parseInt(JSON.parse(localStorage.getItem("usuario"))["id"])
    this.funcService.listarFuncionarios().subscribe(data => {
      this.listarFuncionarios = data as Funcionario[]
    });
  }

  updateStatusFuncionario(id: number, status:string){
      this.funcService.updateStatusFuncionario(id, status).subscribe(data => {
        this.listarFuncionarios = data as Funcionario[]
      });
  }

}
