import { Component, OnInit } from '@angular/core';
import { ScheduleserviceService, Scheduledflight } from '../scheduleservice.service';
import { Router } from '@angular/router';
import { BookingserviceService, Airport } from '../bookingservice.service';
import { FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-scheduledflight',
  templateUrl: './scheduledflight.component.html',
  styleUrls: ['./scheduledflight.component.css']
})
export class ScheduledflightComponent implements OnInit {
  message:string;
  airport:Airport[]
  flight:number;
  sourceairport:string;
  destinationairport:string;
  constructor(private scheduleservice: ScheduleserviceService,private flightservice:FlightserviceService,  private bookingservice: BookingserviceService, private router: Router) { }

  ngOnInit():any{
    this.bookingservice.getAirports().subscribe(response=>this.getairportname(response));
      this.flightservice.getFlights().subscribe(
        Response=>this.getflight(Response),
      );
    }
    getflight(Response){
      this.flight=Response;
    }
  getairportname(response){
    this.airport=response;
  }
  onSubmit(addschedule:Scheduledflight):any{
     this.scheduleservice.addScheduledflight(addschedule,this.flight,this.sourceairport,this.destinationairport).subscribe(data => {
      this.message=data});
  }

}
