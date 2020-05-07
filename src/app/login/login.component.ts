import { Component, OnInit } from '@angular/core';
import { MyserviceService, Userdata } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  buttonText='username';
  constructor(private ser:MyserviceService,private router:Router) { }

  msg:string="Enter Correct UserName and Password";
  ngOnInit(): void {
  }
  onSubmit(u:Userdata){
    this.ser.login(u).subscribe(
      users=>{
        console.log(users);
        if(users=="admin")
            this.router.navigate(['app-adminoperations']);
        else if(users=="customer")
            this.router.navigate(['app-customeroperations']);
        else if(users=="no")
           return alert("Enter correct credentials");
      }
    );
  }
}
