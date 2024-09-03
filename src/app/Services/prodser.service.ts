import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProdserService {

  constructor(private http1:HttpClient) { }

  getproduct(){
    return this.http1.get("http://localhost:3000/products").pipe(map((res:any)=>{
      return res
    }))
  }
  getProductById(id:any)
  {
    return this.http1.get("http://localhost:3000/products/"+id);
  }
  saveProduct(body:any){
    return this.http1.post("http://localhost:3000/products",body)
  }
  deleteProduct(pid:any){
    return this.http1.delete("http://localhost:3000/products/"+pid)
  }
  updateProduct(body:any,pid:any)
   {
    return this.http1.put("http://localhost:3000/products/"+pid, body);
   }
}
