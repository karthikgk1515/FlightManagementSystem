import { Component, OnInit } from '@angular/core';
import { Flight, FlightserviceService } from '../flightservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateflights',
  templateUrl: './updateflights.component.html',
  styleUrls: ['./updateflights.component.css']
})
export class UpdateflightsComponent implements OnInit {
  obj1: any;
  flights: Flight[];
  message: string;
  constructor(private flightservice: FlightserviceService, private router: Router) { 
    this.obj1 = this.flightservice.updateflightMethod();
  }
  onUpdateflight(uflight: Flight): any {
    return this.flightservice.onUpdateflight(uflight).subscribe(data => {
      this.message = data
    });
  }
  ngOnInit(): void {
  }


  

}
