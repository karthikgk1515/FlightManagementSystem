import { Component, OnInit } from '@angular/core';
import {Booking, Passenger,BookingserviceService} from '../bookingservice.service';
import {Userdata, MyserviceService} from '../myservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancelbooking',
  templateUrl: './cancelbooking.component.html',
  styleUrls: ['./cancelbooking.component.css']
})
export class CancelbookingComponent implements OnInit {
 // passenger:Passenger[];
  message:string;
  username:string;
  user:Userdata[];
 // booking:Booking[];
  book:Booking[];
  check:boolean=false;
  constructor(private userservice:MyserviceService,private bookingservice:BookingserviceService, private router:Router) { }

  ngOnInit(): any {

  }

 /* getpassengers(Response)
  {
    this.passenger=Response;
    console.log(this.passenger)
  }
  getbookings(response)
  {
    this.booking=response;
    console.log(this.booking)
  }*/

  getbookingbyid()
  {
    this.bookingservice.getBooking(this.username).subscribe(
      Response=>this.getbook(Response),
    );
  }
  getbook(Response)
  {
    this.book=Response;
    console.log(this.book);
    if(this.book==null)
    {
      this.check=false;
    }
    else{
     /* this.bookingservice.getpassenger().subscribe(
        Response=>this.getpassengers(Response),
      );
      this.bookingservice.getAllBooking().subscribe(
        response=>this.getbookings(response),
      );*/
      this.check=true;
    }
  }

  delete(deletebooking:Booking)
  {
    this.bookingservice.deleteBooking(deletebooking.bookingId).subscribe(data => {
      this.message = data
    });
    this.router.navigate['/app-cancelbooking'];
  }
}
