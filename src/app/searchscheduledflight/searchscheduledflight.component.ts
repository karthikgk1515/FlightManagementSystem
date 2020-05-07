import { Component, OnInit } from '@angular/core';
import { Scheduledflight, ScheduleserviceService } from '../scheduleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchscheduledflight',
  templateUrl: './searchscheduledflight.component.html',
  styleUrls: ['./searchscheduledflight.component.css']
})
export class SearchscheduledflightComponent implements OnInit {
  scheduledflightid:number;
  search:boolean=false;
  search1:boolean=false;
  scheduledflight:any;
  constructor(private scheduleservice: ScheduleserviceService, router: Router) { }

  ngOnInit(): void {
  }
  getscheduledflight(){
    this.scheduleservice.searchScheduledflight(this.scheduledflightid).subscribe((data)=>this.scheduledflight=data);
    if(this.scheduledflight == null){
      this.search1 = true;
      this.search = false;
    }
    else{
      this.search1 = false;
      this.search= true;
    }
  }
}
