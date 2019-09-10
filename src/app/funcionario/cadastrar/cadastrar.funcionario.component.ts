import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar.funcionario.component.html',
  styleUrls: ['./cadastrar.funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario(){
    this.formGroup = this.formBuilder.group({
        nome: ['', Validators.required],
        cfp: ['', Validators.required],
        usuario: ['', Validators.required],
        senha: ['', Validators.required],
        genero: ['', Validators.required],
        email: ['', Validators.required],
        telefone: ['', Validators.required],
        nascimento: ['', Validators.required]
    });
  }

  adicionarFuncionario(funcionario: Funcionario){
    //this.funcionarioService.adicionarFuncionario(funcionario);
  }

}
