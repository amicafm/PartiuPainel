import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Router } from '@angular/router';
import { EditarFuncionarioComponent } from '../editar/editar.funcionario.component';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar.funcionario.component.html',
  styleUrls: ['./listar.funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit, AfterViewInit {
  public listarFuncionarios: Funcionario[];
  public idEditFuncionario:number = 0;
  @ViewChild(EditarFuncionarioComponent, {static: false}) child;

  constructor(private funcService: FuncionarioService,private router:Router) { }

  ngOnInit() {  
    this.funcService.listarFuncionarios().subscribe(data => {
      this.listarFuncionarios = data as Funcionario[]
    });
  }

  ngAfterViewInit() {
    this.idEditFuncionario = this.child.message
  }

  updateStatusFuncionario(id: number, status:string){
      this.funcService.updateStatusFuncionario(id, status).subscribe(data => {
        this.listarFuncionarios = data as Funcionario[]
      });
  }

  editFuncionario(id: number){
    this.idEditFuncionario = id;
    this.router.navigate(['/editarfuncionario']);
  }
}
