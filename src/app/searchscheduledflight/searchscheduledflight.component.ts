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
  scheduledflight:any;
  message:any;
  constructor(private scheduleservice: ScheduleserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  getscheduledflight(){
    this.scheduleservice.searchScheduledflight(this.scheduledflightid).subscribe((data)=>this.scheduledflight=data);
  }
  update(updateschedule: Scheduledflight) {
    this.scheduleservice.updateScheduledflight(updateschedule);
    this.router.navigate(['app-updatescheduleflight']); 
  }
  delete(deleteschedule: Scheduledflight): any {
    if(confirm("Are you sure you want to delete?")){
      this.scheduleservice.deleteScheduledflight(deleteschedule.scheduledflightid).subscribe(data => {
        this.message = data
      });
      window.location.reload();
    }
  }
}
