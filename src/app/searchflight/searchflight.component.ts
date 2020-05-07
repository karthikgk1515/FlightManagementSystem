import { Component, OnInit } from '@angular/core';
import { FlightserviceService, Flight } from '../flightservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {

  flightnumber:number;
  search:boolean=false;
  search1:boolean=false;
  flight:Flight;
  private router: Router
  constructor(private flightservice: FlightserviceService, router: Router) { 
    this.router=router;
  }
  ngOnInit(): any {
  }
  getflight(){
    this.flightservice.searchflight(this.flightnumber).subscribe((data)=>this.flight=data);
    if(this.flight == null){
      this.search1 = true;
      this.search = false;
    }
    else{
      this.search1 = false;
      this.search= true;
    }
  }
}