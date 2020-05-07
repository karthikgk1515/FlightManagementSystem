import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'  
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminoperationsComponent} from './adminoperations/adminoperations.component';
import { CustomeroperationsComponent } from './customeroperations/customeroperations.component';
import { FlightComponent } from './flight/flight.component';
import { ViewflightsComponent } from './viewflights/viewflights.component';
import { UpdateflightsComponent } from './updateflights/updateflights.component';
import { ScheduledflightComponent } from './scheduledflight/scheduledflight.component';
import { ViewscheduleflightComponent } from './viewscheduleflight/viewscheduleflight.component';
import { UpdatescheduleflightComponent } from './updatescheduleflight/updatescheduleflight.component';
import { SearchflightComponent } from './searchflight/searchflight.component';
import { SearchscheduledflightComponent } from './searchscheduledflight/searchscheduledflight.component';
import { BookingComponent } from './booking/booking.component';
import { CancelbookingComponent} from './cancelbooking/cancelbooking.component';

const routes: Routes = [
  {path:'app-login',component:LoginComponent},
  {path:'app-signup',component:SignupComponent},
  {path: 'app-adminoperations', component:AdminoperationsComponent},
  {path: 'app-customeroperations', component:CustomeroperationsComponent},
  {path: 'app-flight', component:FlightComponent},
  {path: 'app-viewflights', component:ViewflightsComponent},
  {path: 'app-updateflights', component:UpdateflightsComponent},
  {path: 'app-scheduledflight', component:ScheduledflightComponent},
  {path: 'app-viewscheduleflight', component:ViewscheduleflightComponent},
  {path: 'app-updatescheduleflight', component:UpdatescheduleflightComponent},
  {path: 'app-searchflight', component:SearchflightComponent},
  {path: 'app-searchscheduledflight', component:SearchscheduledflightComponent},
  {path: 'app-booking', component:BookingComponent},
  {path: 'app-cancelbooking', component:CancelbookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  FormsModule,  
  ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
