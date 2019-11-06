import { Component, OnInit } from '@angular/core';
import { MineracaoService } from '../services/mineracao.service';
import { Avaliacao } from '../models/avaliacao';

@Component({
  selector: 'app-mineracao',
  templateUrl: './mineracao.component.html',
  styleUrls: ['./mineracao.component.css']
})
export class MineracaoComponent implements OnInit {

  listaAvaliacoes : Avaliacao[]
  mediaFuncionarios: number;
  mediaEstabelecimento: number;
  emocao0: string
  emocao1: string
  emocao2: string
  emocao3: string
  
  constructor(private mineracaoService: MineracaoService) { }

  ngOnInit() {  

    this.mineracaoService.getAvaliacoes(""+JSON.parse(localStorage.getItem('restaurante'))["cnpj"]).subscribe(data => {

    // this.mineracaoService.getAvaliacoes("02704394000356").subscribe(data => {

        this.mediaEstabelecimento=0
        this.mediaFuncionarios=0
        this.listaAvaliacoes = data as Avaliacao[]
        let totalEmo0 = 0
        let totalEmo1 = 0
        let totalEmo2 = 0
        let totalEmo3 = 0
        let totalAvEst = 0
        let totalAvFunc = 0
    
        for(let av of this.listaAvaliacoes){
          switch(av.bayesEstabelecimento){
            case 0:
              totalEmo0++
            break;
            case 1:
              totalEmo1++
            break;
            case 2:
              totalEmo2++
            break;
            case 3:
              totalEmo3++
            break;
          }
    
          totalAvEst+=1*av.avEstabelecimento
          totalAvFunc+=1*av.avFuncionario
        }

        let totalEmo = totalEmo0+totalEmo1+totalEmo2+totalEmo3
        this.emocao0 = (totalEmo0/totalEmo*100).toFixed(1)+"%"
        this.emocao1 = (totalEmo1/totalEmo*100).toFixed(1)+"%"
        this.emocao2 = (totalEmo2/totalEmo*100).toFixed(1)+"%"
        this.emocao3 = (totalEmo3/totalEmo*100).toFixed(1)+"%"
        
        this.mediaEstabelecimento = Math.round(totalAvEst/this.listaAvaliacoes.length)
        this.mediaFuncionarios = Math.round(totalAvFunc/this.listaAvaliacoes.length)
         
          
    });
  }

}
