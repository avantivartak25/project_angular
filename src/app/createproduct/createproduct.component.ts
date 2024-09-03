import { Component} from '@angular/core';
import { ProdserService } from '../Services/prodser.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent {
img="../../assets/images/img17.jpg";

constructor(private prod: ProdserService){}
proddata:any;
register(frm1:NgForm)
{
//console.log(frm1.value)
this.proddata=frm1.value;
this.prod.saveProduct(this.proddata).subscribe
((data)=>{
  console.log(data);
  alert("Record saved successfully");
})
}
}
