import { Component, OnInit } from '@angular/core';
import { MyserviceService} from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminoperations',
  templateUrl: './adminoperations.component.html',
  styleUrls: ['./adminoperations.component.css']
})
export class AdminoperationsComponent implements OnInit {

  constructor(private ser:MyserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  
  
}
