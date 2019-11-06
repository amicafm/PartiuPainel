import { Component, OnInit} from '@angular/core';
import { Item } from 'src/app/models/item';
import { CardapioService } from 'src/app/services/cardapio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-cardapio',
  templateUrl: './listar.cardapio.component.html',
  styleUrls: ['./listar.cardapio.component.css']
})
export class ListarCardapioComponent implements OnInit {
  public listarItens: Item[];
  public idEditItem:number = 0;

  constructor(private cardapioService: CardapioService, private router: Router) { }

  ngOnInit() {
    this.cardapioService.listarItens().subscribe(itens => {
      this.listarItens = itens as Item[];
      console.log(itens);
    });
  }

  updateStatusItem(id: number, status:string){
    this.cardapioService.updateStatusItem(id,status).subscribe(itens => {
      this.listarItens = itens as Item[];
      console.log(itens);
    });
  }

}
