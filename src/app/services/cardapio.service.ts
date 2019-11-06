import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {


  static readonly url = "http://localhost:8080/partiu/"

  constructor(private http: HttpClient) { }

  listarItens(){
    let cnpj:string = JSON.parse(localStorage.getItem('restaurante'))["cnpj"]
    return this.http.get(CardapioService.url+"getItensRestaurante?cnpj="+cnpj)
  }

  updateStatusItem(id:number, status:string){
    return this.http.get(CardapioService.url+"updateStatusItem?id="+id+"&status="+status)
  }

  getItem(id: string){
    return this.http.get(CardapioService.url+"getItem?id="+id)
  }

  editItem(id: string, nome: string, categoria: string, valor: number, detalhe: string, status: string){
    let cnpj:string = JSON.parse(localStorage.getItem('restaurante'))["cnpj"]
    return this.http.get(CardapioService.url+"updateItem?id="+id+"&cnpj="+cnpj+"&nome="+nome+"&categoria="+categoria+"&valor="+valor+"&detalhe="+detalhe+"&status="+status)
  }

  createItem(nome: string, categoria: string, valor: number, detalhe: string, status: string){
    let cnpj:string = JSON.parse(localStorage.getItem('restaurante'))["cnpj"]
    return this.http.get(CardapioService.url+"createItem?cnpj="+cnpj+"&nome="+nome+"&categoria="+categoria+"&valor="+valor+"&detalhe="+detalhe+"&status="+status)
  }

  public id: number;
  public nome: string;
  public categoria: string;
  public valor: number;
  public detalhe: string;
  public status: string;
}
