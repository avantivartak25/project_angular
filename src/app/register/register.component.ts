import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterationService } from '../Services/registeration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  img="../../assets/images/img23.jpg";
constructor(private cust: RegisterationService){}
custdata:any;
register(frm1:NgForm)
{
//console.log(frm1.value)
this.custdata=frm1.value;
this.cust.newcustomer(this.custdata).subscribe
((data)=>{
  console.log(data);
  alert("Record saved successfully");
})
}
}
