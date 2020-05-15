import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FlightserviceService {

  constructor(private ser:HttpClient) { }

updateflight:Flight
  public addflight(addflight:Flight){
    console.log("ins service add");
    console.log(addflight);
    const headers=new HttpHeaders().set('Content_Type','text/plain ; charset=utf-8')
    return this.ser.post("http://localhost:9918/admin/addflight",addflight,  { headers, responseType: 'text'});
  }
  public getFlights(){
    console.log("ins service get flights");
    const headers=new HttpHeaders().set('Content_Type','text/plain ;charset=utf=8');
    return this.ser.get<Flight>("http://localhost:9918/admin/getAllFlight");
  }

  public updateFlight(updateflight:Flight){
    this.updateflight=updateflight;
  }
  public updateflightMethod(){
    return this.updateFlight;
  }
  public onUpdateflight(updateflight:Flight){
    console.log("ins service update");
      const headers=new HttpHeaders().set('Content_Type','text/plain ; charset=utf=8');
      return this.ser.put("http://localhost:9918/admin/updateFlight/",updateflight,{ headers, responseType: 'text'});
    }
    deleteflight(id: number) {
      console.log("ins service delete");
      const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
      return this.ser.delete("http://localhost:9918/admin/deleteFlight/" + id,  { headers, responseType: 'text'});
    }
    searchflight(flightNumber:number) {
      console.log("ins service search");
      const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
      return this.ser.get<Flight>("http://localhost:9918/admin/getflight/" + flightNumber);
    }
    public addairport(addairport:Airport){
      console.log("ins service add");
      console.log(addairport);
      const headers=new HttpHeaders().set('Content_Type','text/plain ; charset=utf-8')
      return this.ser.post("http://localhost:9918/admin/Addairport",addairport,  { headers, responseType: 'text'});
    }
}

export class Flight{
  flightNumber:number;
  flightModel:String;
  carrierName:String;
  seatCapacity:number;
}
export class Airport{
  airportCode:string;
  airportLocation:string;
  airportName:string;
}