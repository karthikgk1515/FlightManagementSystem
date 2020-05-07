import { Component, OnInit } from '@angular/core';
import { Scheduledflight, ScheduleserviceService } from '../scheduleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatescheduleflight',
  templateUrl: './updatescheduleflight.component.html',
  styleUrls: ['./updatescheduleflight.component.css']
})
export class UpdatescheduleflightComponent implements OnInit {

  obj1: any;
  scheduledflight: Scheduledflight[];
  message: string;
  flightNumber:number;
  sourceairport:string;
  destinationairport:string;
  constructor(private scheduleservice: ScheduleserviceService, private router: Router) { 
    this.obj1 = this.scheduleservice.updateScheduledflightMethod();
  }
  onUpdateScheduledflight(uschedule: Scheduledflight): any {
    return this.scheduleservice.onUpdateScheduledflight(uschedule,this.flightNumber,this.sourceairport,this.destinationairport).subscribe(data => {
      this.message = data
    });
  }
  ngOnInit(): void {
  }

}
