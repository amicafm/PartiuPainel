import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  static readonly url = "http://localhost:8080/partiu/"
  cnpj

  constructor(private http: HttpClient) { 
    this.cnpj = JSON.parse(localStorage.getItem('restaurante'))["cnpj"]
  }

  createFuncionario(tipo:string, cpf:string, nome:string, nasc:string, email: string, ddd:string, telefone:string, genero:string, senha: string){
    return this.http.get(FuncionarioService.url+"createFuncionario?tipo="+tipo+"&cpf="+cpf+"&nome="+nome+"&dta_nascimento="+nasc+"&email="+email+"&ddd="+ddd+"&telefone="+telefone+"&genero="+genero+"&senha="+senha+"&cnpj="+this.cnpj);
  }

  listarFuncionarios(){
    return this.http.get(FuncionarioService.url+"listarFuncionarios?cnpj="+this.cnpj)
  }
}
