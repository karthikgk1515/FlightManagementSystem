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
  flight:Flight;
  message:any
  constructor(private flightservice: FlightserviceService,private router: Router) { 
    this.router=router;
  }
  ngOnInit(): any {
  }
  getflight(){
    this.flightservice.searchflight(this.flightnumber).subscribe((data)=>this.flight=data);
  
  }
  updateflight(updateflight:Flight){
    this.flightservice.updateFlight(updateflight);
    this.router.navigate(['app-updateflights']);
  }
  delete(deleteflight:Flight):any{
    if(confirm("Are you sure you want to delete?")){
      this.flightservice.deleteflight(deleteflight.flightNumber).subscribe(data => {
        this.message = data
      });
      window.location.reload();
    }
  }
}