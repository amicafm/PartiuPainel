import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { CardapioService } from 'src/app/services/cardapio.service';

@Component({
  selector: 'app-listar-cardapio',
  templateUrl: './listar.cardapio.component.html',
  styleUrls: ['./listar.cardapio.component.css']
})
export class ListarCardapioComponent implements OnInit {
  public listarItens: Item[];

  constructor(private cardapioService: CardapioService) { }

  ngOnInit() {
    this.cardapioService.listarItens().subscribe(itens => {
      this.listarItens = itens;
      console.log(itens);
    });
  }

  excluirItem(id: number){
    //this.cardapioService.deletarItemById(id);
  }

}
