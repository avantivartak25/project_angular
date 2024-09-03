import { Component, OnInit} from '@angular/core';
import { ProdserService } from '../Services/prodser.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-retrieveproduct',
  templateUrl: './retrieveproduct.component.html',
  styleUrls: ['./retrieveproduct.component.css']
})
export class RetrieveproductComponent implements OnInit {
  constructor(private prod: ProdserService, private rout1: Router)
  {}
  productdata:any
  ngOnInit():void{
    this.prod.getproduct().subscribe((data)=>{
      this.productdata=data;
      console.log(data);
    })
  }
  
  editProduct(pid:number)
  {
    console.log(pid);
    this.rout1.navigateByUrl("/updateproduct/"+pid);
  }
  
  deleteProd(pid:number){
    console.log(pid);
    if(confirm("Are you sure to delete ")) {
      this.prod.deleteProduct(pid).subscribe((data)=>{
        alert("Record Deleted");
        this.rout1.navigateByUrl("/retrieveproduct");
      })
    }
  }
}
