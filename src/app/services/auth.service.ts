import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logIn(userName : string, passWord : string) : Observable<boolean>{
    let isAuthenticated : boolean = false;
    isAuthenticated = (userName === "admin" && passWord === "admin");
    if(isAuthenticated) 
      localStorage.setItem("isAuthenticated","true" );
    return of(isAuthenticated);
  }

  logOut(){
    localStorage.removeItem("isAuthenticated");
  }
}
