import { Component, OnInit } from '@angular/core';
import { Scheduledflight,  ScheduleserviceService } from '../scheduleservice.service'
import { Router } from '@angular/router';
import { BookingserviceService, Airport,Booking, Passenger } from '../bookingservice.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  flights:Scheduledflight[];
  airport:Airport[];
  source:string;
  destination:string;
  date:string;
  bookingid:any;
  passengercount:number=1;
  passenger=new Passenger();
  passengerarray=[];
  scheduledflightid:any;
  username:string;
  message:any
  availableseats:any;
  constructor(private scheduledservice:ScheduleserviceService, private bookingservice:BookingserviceService, private router:Router) { }

 
  ngOnInit():any{
    this.bookingservice.getAirports().subscribe(response=>this.getairportname(response));

  }
  getairportname(response){
    this.airport=response;
  }



  getavailableflights(){
    this.bookingservice.viewavailableflights(this.source,this.destination,this.date).subscribe(response=>this.handleSuccessfulResponse(response));
  }

  handleSuccessfulResponse(response){
    this.flights=response;
  }

  bookflight(schedule:Scheduledflight)
  {
    this.bookingservice.getbookingid().subscribe(data => {
      this.bookingid=data});
      this.scheduledflightid=schedule.scheduledflightid;
      this.availableseats=schedule.availableSeats;
      this.passenger=new Passenger();
      this.passengerarray.push(this.passenger);
  }


  addbooking(addbooking:Booking):any{
    this.bookingservice.checkavailability(addbooking.noOfPassengers,this.availableseats,this.scheduledflightid).subscribe(
      data =>{
      console.log(data)
      if(data=="seats")
      {
     this.bookingservice.addbooking(addbooking,this.username, this.scheduledflightid).subscribe(data => {
      this.message=data});
      if(confirm("Confirm booking"))
      {
        this.savepassenger();
        window.location.reload();
      }
     }
     else if(data=="no seats"){
     alert("Available seats:"+this.availableseats);
     window.location.reload();
       } } );
    }
    
     
  savepassenger():any{
    console.log(this.passengerarray);
     this.bookingservice.addpassenger(this.passengerarray,this.bookingid).subscribe(Response => {
      this.handleSuccessfulResponse1(Response)});
  }

  handleSuccessfulResponse1(Response){
    this.passenger=Response;
    console.log(this.passenger);
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
