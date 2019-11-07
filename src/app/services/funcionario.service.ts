import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  static readonly url = "http://localhost:8080/partiu/"
  cnpj: string

  constructor(private http: HttpClient) { 
    this.cnpj = JSON.parse(localStorage.getItem('restaurante'))["cnpj"]
  }

  createFuncionario(tipo:string, cpf:string, nome:string, nasc:string, email: string, ddd:string, telefone:string, genero:string, senha: string){
    return this.http.get(FuncionarioService.url+"createFuncionario?tipo="+tipo+"&cpf="+cpf+"&nome="+nome+"&dta_nascimento="+nasc+"&email="+email+"&ddd="+ddd+"&telefone="+telefone+"&genero="+genero+"&senha="+senha+"&cnpj="+this.cnpj);
  }

  editFuncionario(id:string, tipo:string, cpf:string, nome:string, nasc:string, email: string, ddd:string, telefone:string, genero:string, senha: string){
    return this.http.get(FuncionarioService.url+"updateUsuario?id="+id+"&tipo="+tipo+"&cpf="+cpf+"&nome="+nome+"&dta_nascimento="+nasc+"&email="+email+"&ddd="+ddd+"&telefone="+telefone+"&genero="+genero+"&senha="+senha+"&cnpj="+this.cnpj+"&status=A");
  }



  updateStatusFuncionario(id: number, status:string ){
    return this.http.get(FuncionarioService.url+"updateStatusFuncionario?id="+id+"&status="+status+"&cnpj="+this.cnpj);
  }


  getFunc(id:string ){
    return this.http.get(FuncionarioService.url+"getUsuario?variavel=id&valor="+id);
  }

  listarFuncionarios(){
    return this.http.get(FuncionarioService.url+"getUsuario?variavel=cnpj&valor="+this.cnpj)
  }
}
