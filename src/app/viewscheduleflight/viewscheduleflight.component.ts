import { Component, OnInit } from '@angular/core';
import { ScheduleserviceService, Scheduledflight } from '../scheduleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewscheduleflight',
  templateUrl: './viewscheduleflight.component.html',
  styleUrls: ['./viewscheduleflight.component.css']
})
export class ViewscheduleflightComponent implements OnInit {
  message: string;
  scheduledflight: Scheduledflight[];
  constructor(private scheduleservice: ScheduleserviceService, private router: Router) { }

  ngOnInit(): any {
    this.scheduleservice.getScheduledflight().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
 
  handleSuccessfulResponse(response) {
  this.scheduledflight=response;
  
  }


  update(updateschedule: Scheduledflight) {
    this.scheduleservice.updateScheduledflight(updateschedule);
    this.router.navigate(['app-updatescheduleflight']); 
  }
  delete(deleteschedule: Scheduledflight): any {
    this.scheduleservice.deleteScheduledflight(deleteschedule.scheduledflightid).subscribe(data => {
      this.message = data
    });
    this.router.navigate(['/app-viewscheduleflight']);
  }


}
