import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MineracaoService {

  private readonly url = "http://localhost:8080/partiu/"

  constructor(private http: HttpClient) { }


  getAvaliacoes(cnpj:string){
    return this.http.get(this.url+"getAvaliacaoByCnpj?cnpj="+cnpj);
  }

  getRestaurante(cnpj:string){
    return this.http.get(this.url+"getRestauranteByCnpj?cnpj="+cnpj);
  }
  
}
