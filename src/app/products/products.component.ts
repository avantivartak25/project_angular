import { Component, OnInit } from '@angular/core';
import { ProdserService } from '../Services/prodser.service';
import { CartService } from '../Services/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public productList:any;
constructor(private services:ProdserService, private cart:CartService ){}
  
ngOnInit():void{
    this.services.getproduct().subscribe(res=>{
      //console.log (res);
      this.productList=res;

    this.productList.forEach((a: any)=>{
      Object.assign(a,{total:a.price})
    });
      
    });
    }
  

//add to cart
addtocart(item:any)
{
  this.cart.addtocart(item);
  console.log(item);
  alert("Product added to cart")
}
}