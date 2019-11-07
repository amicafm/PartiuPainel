import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Login } from '../models/login';
import { Router } from '@angular/router';
import { Restaurante } from '../models/restaurante';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup
  public usuario: Usuario;

  constructor(private router:Router, private formBuilder: FormBuilder, private loginService: LoginService, 
    private httpClient: HttpClient) {


    let usuario = JSON.parse(localStorage.getItem('usuario'));
    if(usuario){
      this.router.navigate(['/mediador']);
    }
  }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario(){
    this.formGroup = this.formBuilder.group({
        senha: ['', Validators.required],
        email: ['', Validators.required]
    });
  }

  login(usuario: Usuario){
    let email = this.formGroup.get("email").value;
    let senha = this.formGroup.get("senha").value;
    
    this.loginService.login(email, senha).subscribe((data: Usuario)=>{
      console.log(data["status"])
      if (data["id"] && data["tipo"]=="gerente" && data["status"]=="A"){
        this.usuario =  data
        this.loginService.getCnpj(data.id).subscribe((restaurante) =>{
          localStorage.setItem('restaurante', JSON.stringify(restaurante))
          localStorage.setItem('usuario', JSON.stringify(this.usuario));
          document.getElementById("linkLogInOut").innerHTML='<span class="fas fa-sign-out-alt"></span> Logout'
          console.log("Usuario logado; email = "+data["email"])
          this.router.navigate(['/mediador/']);
        })
        
      }else{
        console.log("Usuario Invalido")
        if(data["tipo"]=="cliente" || data["tipo"]=="garcom") console.log("Não é gerente")
        if(data["status"]=="I") console.log("Usuario Inativo")
      }
    })
  }
}
