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

  adicionarFuncionario(){
      let nome = this.formGroup.get("nome").value;
      let cpf = this.formGroup.get("cpf").value;
      // let usuario = this.formGroup.get("cpf").value;
      let senha = this.formGroup.get("senha").value;
      let genero = this.formGroup.get("genero").value;
      let email = this.formGroup.get("email").value;
      let telefone = this.formGroup.get("telefone").value;
      let nasc = this.formGroup.get("nasc").value;
      // this.loginService.login(email, senha).subscribe((data: Usuario)=>{
      //   if (data["id"]){
      //     this.usuario =  data
      //     localStorage.setItem('usuario', JSON.stringify(this.usuario));
          
      //     console.log("Usuario logado; id = "+data["id"])
      //     this.router.navigate(['/mediador/']);
      //   }else{
      //     console.log("Usuario Invalido")
      //   }
      // })
    // }
  }

}
