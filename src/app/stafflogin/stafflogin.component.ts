import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stafflogin',
  templateUrl: './stafflogin.component.html',
  styleUrls: ['./stafflogin.component.css']
})
export class StaffloginComponent implements OnInit {
  img="../../assets/images/img19.jpg"
  constructor(private authser:AuthService,private myroute:Router, private actroute:ActivatedRoute)
  {}
  usname:string="";
  passwd:string="";
  ngOnInit(): void {
    this.actroute.queryParamMap.subscribe((queries)=>
    {
      const logout = Boolean(queries.get('logout'));
      if(logout)
      {
        this.authser.logout();
        alert('You are now logged out');
      }
    })
  }

  loginUser()
  {
  let retuser= this.authser.login(this.usname, this.passwd);
    if (retuser== undefined)
      {
        alert("Invalid User");
        this.myroute.navigateByUrl("/login")
      }
    else{
      alert("Welcome " + retuser.name + " You are a valid user");
      this.myroute.navigateByUrl("/retrieveproduct")
    }
  }
}

