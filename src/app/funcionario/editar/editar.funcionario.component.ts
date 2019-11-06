import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/models/funcionario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar.funcionario.component.html',
  styleUrls: ['./editar.funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {
  public formGroup: FormGroup;
  public idItem:number;



  constructor(private formBuilder: FormBuilder, private router: Router) { }

  public idFuncionario:number
  ngOnInit() {
    this.criarFormulario();

    console.log(this.idFuncionario)

  }

  criarFormulario(){
    this.formGroup = this.formBuilder.group({
        nome: ['', Validators.required],
        cfp: ['', Validators.required],
        senha: ['', Validators.required],
        genero: ['', Validators.required],
        email: ['', Validators.required],
        telefone: ['', Validators.required],
        nascimento: ['', Validators.required],
        categoria: ['', Validators.required]
    });
  }

  editarFuncionario(funcionario: Funcionario){
    //this.funcionarioService.atualizaFuncionario(funcionario);
  }

}
