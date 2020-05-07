import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Time } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class ScheduleserviceService {

  constructor(private ser:HttpClient) { }
  updateschedule: Scheduledflight;
  public addScheduledflight(addschedule: Scheduledflight, flight:number,sourceairport:string, destinationairport:string) {
    console.log("ins service add");
    console.log(addschedule,flight,sourceairport,destinationairport);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.post("http://localhost:9918/admin/addScheduledFlight/"+flight+'/'+sourceairport+'/'+destinationairport, addschedule,  { headers, responseType: 'text'});
  }

  public getScheduledflight() {
    console.log("ins service get schedule");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.get("http://localhost:9918/admin/getAllscheduledflights", {headers, responseType:'json'});
  }

  public updateScheduledflight(updateschedule: Scheduledflight) {
    this.updateschedule = updateschedule;
  }
  public updateScheduledflightMethod() {
    return this.updateschedule;
  }
  public onUpdateScheduledflight(updateschedule: Scheduledflight,flight:number,sourceairport:string,destinationairport:string) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.put("http://localhost:9918/admin/updatescheduledflight/"+flight+'/'+sourceairport+'/'+destinationairport, updateschedule,  { headers, responseType: 'text'});
  }
  deleteScheduledflight(scheduledflightid: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.delete("http://localhost:9918/admin/deletescheduledflight/" + scheduledflightid,  { headers, responseType: 'text'});
  }
  searchScheduledflight(scheduledflightid: number) {
    console.log("ins service search");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.get("http://localhost:9918/admin/getScheduledFlight/" + scheduledflightid, { headers, responseType: 'json'});
  }

}

export class Scheduledflight
{
  scheduledflightid:number;
  availableSeats:number;
  sourceairport:string;
  flightNumber: number;
  date1:Date;
  destinationairport:string;
  arrivaltime:Time;
  departuretime:Time;
  ticketcost:number;

}

