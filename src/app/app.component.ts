import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Painel Partiu';
  loggedIn: boolean;

  constructor(private router: Router,@Inject(DOCUMENT) document){
   
  };

  ngOnInit(){
    this.setLogInOrOut()
  }
  

  setLogInOrOut() {
    let usuario = localStorage.getItem('usuario');
    if (usuario == null){
      this.loggedIn = false;
      console.log("User is NOT logged in");
      
    }else{
      // TODO set texto e icone para logout
      this.loggedIn = true;
      console.log("User is logged in")
    }
  }

  logInOut(){
    if (localStorage.getItem('usuario') != null){
      localStorage.clear();
     document.getElementById("linkLogInOut").innerHTML='<span class="fas fa-sign-in-alt"></span> Login'
    }else{
    document.getElementById("linkLogInOut").innerHTML='<span class="fas fa-sign-out-alt"></span> Logout'
  }
    this.router.navigate(['/login/']);
  }


}
