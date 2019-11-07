import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar.funcionario.component.html',
  styleUrls: ['./cadastrar.funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {
  public formGroup: FormGroup;
  public defaultCargo = 'garcom'
  public defaultSexo = 'M'

  constructor(private router: Router, private formBuilder: FormBuilder,private funcService: FuncionarioService) { }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario(){
    this.formGroup = this.formBuilder.group({
        
      cpf: ['', Validators.required],
      nome: ['', Validators.required],
      nascimento: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      genero: ['', Validators.required],
      senha: ['', Validators.required],
      tipo: ['']
    });
  }

  adicionarFuncionario(){
      let nome = this.formGroup.get("nome").value;
      let tipo = this.formGroup.get("tipo").value;
      let cpf = this.formGroup.get("cpf").value;
      let nasc = this.formGroup.get("nascimento").value;
      let email = this.formGroup.get("email").value;
      let ddd = (this.formGroup.get("telefone").value).substring(0, 2);
      let telefone = (this.formGroup.get("telefone").value).substring(2);
      let genero = this.formGroup.get("genero").value;
      let senha = this.formGroup.get("senha").value;
      
      let nasc1 = nasc.substring(0,2);
      let nasc2= nasc.substring(2,4);
      let nasc3 = nasc.substring(4);
  
      nasc=(nasc1+"/"+nasc2+"/"+nasc3)
      
      this.funcService.createFuncionario(tipo, cpf, nome, nasc, email, ddd, telefone, genero, senha).subscribe(data => {
        this.router.navigate(["/listarfuncionario"])
      });
    }

}
