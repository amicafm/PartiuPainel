import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Painel Partiu';
  loggedIn: boolean;

  constructor(private router: Router){
   
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
      this.loggedIn = true
      console.log("User is logged in")
    }
  }

  logOut(){
    console.log("tentativa logOut")
    if (localStorage.getItem('usuario') != null){
      console.log("deu logOut")
      localStorage.clear();
      this.router.navigate(['/login/']);
    }
  }


}
