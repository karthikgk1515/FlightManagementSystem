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
  message:string;
  username:string;
  book:Booking[];
  constructor(private userservice:MyserviceService,private bookingservice:BookingserviceService, private router:Router) { }

  ngOnInit(): any {

  }

  getbookingbyid()
  {
    this.bookingservice.getBooking(this.username).subscribe(
      Response=>this.getbook(Response),
    );
  }
  getbook(Response)
  {
    this.book=Response;
  }

  delete(deletebooking:Booking)
  {
    if(confirm("Are you sure you want to delete?")){
    this.bookingservice.deleteBooking(deletebooking.bookingId).subscribe(data => {
      this.message = data
    });
    window.location.reload();
  }
}
}
