import { Component, OnInit } from '@angular/core';
import { ScheduleserviceService, Scheduledflight } from '../scheduleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scheduledflight',
  templateUrl: './scheduledflight.component.html',
  styleUrls: ['./scheduledflight.component.css']
})
export class ScheduledflightComponent implements OnInit {
  message:string;
  flight:number;
  sourceairport:string;
  destinationairport:string;
  constructor(private scheduleservice: ScheduleserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(addschedule:Scheduledflight):any{
    console.log(addschedule,this.flight,this.sourceairport,this.destinationairport);
     this.scheduleservice.addScheduledflight(addschedule,this.flight,this.sourceairport,this.destinationairport).subscribe(data => {
      this.message=data});
  }

}
