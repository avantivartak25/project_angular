import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProdserService } from '../Services/prodser.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit{
  img="../../assets/images/img22.jpg";
  prodid:any;
  productdata:any;
  constructor(private actroute:ActivatedRoute,private sser:ProdserService)
  {}
 ngOnInit(): void 
 {
  this.prodid= this.actroute.snapshot.paramMap.get('id');
  console.log(this.prodid);   
  this.sser.getProductById(this.prodid).subscribe((data)=>{
    console.log(data);
    this.productdata=data;
  })  
 }
updateProduct(prod:NgForm)
{
  this.sser.updateProduct(prod.value,this.prodid).subscribe((data)=>{
    alert('Record Updated Successfully');
    console.log(this.prodid);
  },(err)=>{alert("Something gone Wrong")});
}
}
