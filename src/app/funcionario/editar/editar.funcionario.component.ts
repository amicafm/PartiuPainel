import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/models/funcionario';
import { Router, ActivatedRoute } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar.funcionario.component.html',
  styleUrls: ['./editar.funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {
  public formGroup: FormGroup;
  public funcionario: Funcionario



  constructor(private formBuilder: FormBuilder, 
    private route: ActivatedRoute,
    private router: Router,
    private funcService: FuncionarioService) { }

  ngOnInit() {
    this.getFunc(this.route.snapshot.paramMap.get("id"))
    this.criarFormulario();

  }


  getFunc(id: string){
    this.funcService.getFunc(id).subscribe(data => {
      this.funcionario = data[0] as Funcionario;
      this.funcionario.telcompleto=this.funcionario.ddd+""+this.funcionario.telefone
      console.log(this.funcionario);
    });
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

  editFunc(){
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
    

    this.funcService.editFuncionario(this.route.snapshot.paramMap.get("id"), tipo, cpf, nome, nasc, email, ddd, telefone, genero, senha).subscribe(data => {
      if(data)
      this.router.navigate(["/listarfuncionario"])
    });
  }

}
