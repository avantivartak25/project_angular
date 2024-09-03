import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged=false;
  constructor(private userser:UserService) { }
  login(uname:string,pass:string)
  {
    let user = this.userser.users.find((u)=>u.username == uname && u.password==pass);
    if (user == undefined)
      this.isLogged=false;
    else
      this.isLogged=true;
    return user;
  }
  logout(){
    this.isLogged=false;
  }
  isAuthenticated(){
    return this.isLogged;
  }

}
