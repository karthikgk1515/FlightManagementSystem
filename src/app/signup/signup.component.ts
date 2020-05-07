import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {MyserviceService,Userdata} from '../myservice.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  message:string;
  constructor(private ser:MyserviceService,private router:Router) { }
  ngOnInit(): void {
  }
  onSubmit(adduser:Userdata):any{
    console.log(adduser);
     this.ser.addUser(adduser).subscribe(data => {
      this.message=data});
  
   // window.print()
  }

}
