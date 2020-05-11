import { Component, OnInit } from '@angular/core';
import { FlightserviceService, Flight } from '../flightservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewflights',
  templateUrl: './viewflights.component.html',
  styleUrls: ['./viewflights.component.css']
})
export class ViewflightsComponent implements OnInit {
  message:string;
  flight:Flight[];

  constructor(private flightservice:FlightserviceService,private router:Router) { }

  ngOnInit(): any {
    this.flightservice.getFlights().subscribe(
      response=>this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response){
    this.flight=response;
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
