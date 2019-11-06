import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/models/item';
import { CardapioService } from 'src/app/services/cardapio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-cardapio',
  templateUrl: './cadastrar.cardapio.component.html',
  styleUrls: ['./cadastrar.cardapio.component.css']
})
export class CadastrarCardapioComponent implements OnInit {
  public formGroup: FormGroup;
  public defaultAtivo = "A"

  constructor(private formBuilder: FormBuilder,
    private cardapioService: CardapioService,
    private router: Router) { }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario(){
    this.formGroup = this.formBuilder.group({
        nome: ['', Validators.required],
        categoria: ['', Validators.required],
        valor: ['', Validators.required],
        detalhe: [''],
        status: ['', Validators.required]
    });
  }

  criarItem(){
    let nome = this.formGroup.get("nome").value;
    let categoria = this.formGroup.get("categoria").value;
    let valor = this.formGroup.get("valor").value;
    let detalhe = this.formGroup.get("detalhe").value;
    let status = this.formGroup.get("status").value;

    this.cardapioService.createItem(nome, categoria, valor, detalhe, status).subscribe(data => {
      console.log( this.formGroup.get("status").value)
      this.router.navigate(["/listarcardapio"])
    });
  }
}
