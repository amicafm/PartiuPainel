import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {


  static readonly url = "http://localhost:8080/partiu/"

  constructor(private http: HttpClient) { }

  listarItens(){
    let cnpj = JSON.parse(localStorage.getItem('restaurante'))["cnpj"]
    return this.http.get(CardapioService.url+"getItensRestaurante?cnpj="+cnpj)
  }
}
