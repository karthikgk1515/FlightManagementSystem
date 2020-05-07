import { Component, OnInit } from '@angular/core';
import { Scheduledflight,  ScheduleserviceService } from '../scheduleservice.service'
import { Router } from '@angular/router';
import { BookingserviceService, Airport,Booking, Passenger } from '../bookingservice.service';
import {FormBuilder,FormGroup, FormControl } from  '@angular/forms';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  flights:Scheduledflight[];
  book:Booking;
  airport:Airport[];
  source:string;
  destination:string;
  date:string;
  available:boolean;
  notavailable:boolean;
  bookingid:any;
  address:string;
  passengercount:number=1;
  message:any;
  booking:boolean;
  passenger=new Passenger();
  passengerarray=[];
  scheduledflightid:any;
  next:boolean;
  username:string;
  constructor(private scheduledservice:ScheduleserviceService, private bookingservice:BookingserviceService, private router:Router) { }

 
  ngOnInit():any{
    this.bookingservice.getAirports().subscribe(response=>this.getairportname(response));

  }
  getairportname(response){
    this.airport=response;
    console.log(this.airport)
  }

  handleSuccessfulResponse(response){
    this.flights=response;
    console.log(this.flights);
  }

  getavailableflights(){
    console.log(this.date);
    this.bookingservice.viewavailableflights(this.source,this.destination,this.date).subscribe(response=>this.handleSuccessfulResponse(response));
    if(this.flights == null){
      this.notavailable = true;
      this.available = false;
    }
    else{
      this.notavailable = false;
      this.available= true;
    }
  }

  bookflight(schedule:Scheduledflight)
  {
    this.bookingservice.getbookingid().subscribe(data => {
      this.bookingid=data});
      this.scheduledflightid=schedule.scheduledflightid;
      if(this.bookingid==0)
      {
        this.booking=false;
      }
      else
      {
        this.booking=true;

      }
      this.passenger=new Passenger();
      this.passengerarray.push(this.passenger);

  }

  addbooking(addbooking:Booking):any{
    console.log(addbooking);
    console.log(this.username)
     this.bookingservice.addbooking(addbooking,this.username, this.scheduledflightid).subscribe(data => {
      this.message=data});
      this.next=true;
  }
  savepassenger():any{
    console.log(this.passengerarray);
     this.bookingservice.addpassenger(this.passengerarray,this.bookingid).subscribe(data => {
      this.message=data});
  }
counter(i:number)
{
return new Array(i);
}

addpassenger(){
  this.passenger=new Passenger();
  this.passengerarray.push(this.passenger);
  this.passengercount+=1;
}

removepassenger(i)
{
  this.passengerarray.splice(i);
  this.passengercount-=1;
}
}
