import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor( private router: Router) { }
  // private isAuthenticated: boolean = false;

  canActivate() {
    if (this.isLoggedIn()){
      return true
    }else{
      this.router.navigate(["login"])
      return false
    }
    
  }


//   canActivate(routeerstate?: any) {
//     let url = routeerstate._routerState.url; // this url is unactivated route which the user is trying to enter;
//    let validRoutes = routes;
//    url = url.replace(/\//g,"");
//    const isRouteValid = validRoutes.findIndex((item) => item.path === url) > -1 ? true : false; 
//    if(isRouteValid){
//       if(this.isLoggedIn()) {
//        if(url === 'login'){
//          this.router.navigate(['dashboard']);
//        } else {
//          return true;
//        }
//       } else {
//          this.router.navigate(['login']);
//       }
//     } else { 
//      if(this.isLoggedIn()) { // not valid route and logged In
//          this.router.navigate(['dashboard']);
//      }
//     }

//    }

   isLoggedIn() {
    return (localStorage.getItem('usuario') != null);
   }
 } 
