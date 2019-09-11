import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mediador',
  templateUrl: './mediador.component.html',
  styleUrls: ['./mediador.component.css']
})
export class MediadorComponent implements OnInit {

  private usuario: Usuario
  constructor(private router: Router) { 
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    if(!this.usuario){
      console.log("Não logado")
      this.router.navigate(['/login/']);
    }
  }

  ngOnInit() {
  }

}
