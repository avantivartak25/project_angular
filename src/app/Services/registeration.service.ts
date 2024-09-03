import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {

  constructor(private http1:HttpClient) {}
  newcustomer(body:any){
    return this.http1.post("http://localhost:3000/customers",body)
  }
}
