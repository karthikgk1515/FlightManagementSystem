import { Component, OnInit } from '@angular/core';
import { FlightserviceService, Airport } from '../flightservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent implements OnInit {
  message:any;
  constructor(private flightservice:FlightserviceService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(addairport:Airport):any{
    console.log(addairport);
     this.flightservice.addairport(addairport).subscribe(data => {
      this.message=data});
  }

}
