import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingserviceService {

  constructor(private http:HttpClient) { }
  updatebooking:Booking;
  public addbooking(addbooking:Booking, username:string,scheduledflightid:number) {
    console.log("ins service add");
    console.log(addbooking);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.post("http://localhost:9999/customer/addBooking/"+username+'/'+scheduledflightid,  addbooking, { headers, responseType: 'text'});
  }

  deleteBooking(bookingid: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.delete("http://localhost:9999/customer/deleteBooking/" + bookingid,  { headers, responseType: 'text'});
  }

  public getBooking(username:string) {
    console.log("ins service get schedule");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.get("http://localhost:9999/customer/getbooking/"+username, {headers, responseType:'json'});
  }


  public getbookingid()
  {
    console.log("bookingid")
    const headers=new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.get("http://localhost:9999/customer/getBookingid")
  }

 public addpassenger(addpassenger:Passenger[], bookingid:string) {
    console.log("ins service add");
    console.log(addpassenger);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.post("http://localhost:9999/customer/addPassenger/"+bookingid, addpassenger,  { headers, responseType: 'json'});
  }


  public getAirports() {
    console.log("ins service get schedule");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.get<Airport>("http://localhost:9999/customer/getAllAirports");
  }
  public viewavailableflights(source:string, destination:string, date:string) {
    console.log("ins service get schedule");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.get("http://localhost:9999/customer/booking/"+source+'/'+destination+'/'+date, {headers, responseType:'json'});
  }
  public checkavailability(noofpassengers:number,availableseats:number,scheduledflightid:number)
  {
    console.log("check availability");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
   return this.http.get("http://localhost:9999/customer/checkavailability/"+noofpassengers+'/'+availableseats+'/'+scheduledflightid, {responseType:'text'});
  }
  public updateseats(deletebooking:Booking,noofpassengers:number)
  {
    console.log("update seats");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
   return this.http.put("http://localhost:9999/customer/updateseats/"+noofpassengers,deletebooking, {headers, responseType:'text'});
  }
}

export class Booking
{
  bookingId:number;
  bookingDate:Date;
  ticketCost:number;
  noOfPassengers: number;
  username:string;
  scheduledflightid:number;
}

export class Passenger
{
pnrnumber:number;
passengername:string;
passengerage:number;
passengerUIN:number;
passengergender:string;
}

export class Airport{
  airportCode:string;
  airportLocation:string;
  airportName:string;
}