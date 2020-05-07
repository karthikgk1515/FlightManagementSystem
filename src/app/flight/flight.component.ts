import { Component, OnInit } from '@angular/core';
import { FlightserviceService, Flight } from '../flightservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  message:string;
  constructor(private flightservice: FlightserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(addflight:Flight):any{
    console.log(addflight);
     this.flightservice.addflight(addflight).subscribe(data => {
      this.message=data});
  }

  

}
