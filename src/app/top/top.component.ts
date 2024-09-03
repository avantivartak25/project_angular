import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
 public totalitem=0;
 
  constructor(private cart:CartService){}
  ngOnInit(): void {
   this.cart.getproduct().subscribe(res=>{
    this.totalitem=res.length;
   })
 }
}
