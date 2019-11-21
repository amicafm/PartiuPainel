import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Item } from 'src/app/models/item';
import { Router, ActivatedRoute } from '@angular/router';
import { CardapioService } from 'src/app/services/cardapio.service';

@Component({
  selector: 'app-editar-cardapio',
  templateUrl: './editar.cardapio.component.html',
  styleUrls: ['./editar.cardapio.component.css']
})
export class EditarCardapioComponent implements OnInit {
  public formGroup: FormGroup;
  public item: Item
  private itemId: string;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private cardapioService: CardapioService,
    private router: Router) { }
    

  ngOnInit() {
    this.criarFormulario();
    this.itemId = this.route.snapshot.paramMap.get("id")
    this.getItem(this.itemId)

}

  criarFormulario(){
    this.formGroup = this.formBuilder.group({
        nome: ['', Validators.required],
        categoria: ['', Validators.required],
        valor: ['', Validators.required],
        detalhe: ['', ],
        status: ['', Validators.required]
    });
  }

  getItem(id: string){
    this.cardapioService.getItem(id).subscribe(data => {
      this.item = data as Item;
      console.log(this.item);
    });
  }
  
  editarItem(){
    //this.cardapioService.atualizarItem(item);
    let nome = this.formGroup.get("nome").value;
    let categoria = this.formGroup.get("categoria").value;
    let valor = this.formGroup.get("valor").value;
    let detalhe = this.formGroup.get("detalhe").value;
    if (detalhe=="") detalhe="-"
    let status = this.formGroup.get("status").value;

    this.cardapioService.editItem(this.itemId, nome, categoria, valor, detalhe, status).subscribe(data => {
      if(data)
      this.router.navigate(["/listarcardapio"])
    });
  }

}
