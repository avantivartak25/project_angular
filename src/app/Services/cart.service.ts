import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public productList = new BehaviorSubject<any>([])
  public cartlist:any=[]
  constructor() { }

  //get
  getproduct(){
    return this.productList.asObservable();
  }

  //add to cart
  addtocart(product:any){
    this.cartlist.push(product);
    this.productList.next(this.cartlist);
    this.gettotalprice();
  }

  //total price
  gettotalprice():number{
    let grandtotal= 0;
    this.cartlist.map((a:any)=>{
      grandtotal= (grandtotal) + parseInt(a.total);
      console.log(grandtotal)
    })
    return grandtotal;
  }

//empty or delete all

removeallcart(){
  this.cartlist=[]
  this.productList.next(this.cartlist)
}

removeitem(product:any){
  this.cartlist.map((a:any,index:any)=>{
    if(product.id === a.id)
      this.cartlist.splice(index,1)
  })
  this.productList.next(this.cartlist);
}
}
