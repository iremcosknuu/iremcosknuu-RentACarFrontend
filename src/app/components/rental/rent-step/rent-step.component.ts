import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-rent-step',
  templateUrl: './rent-step.component.html',
  styleUrls: ['./rent-step.component.css']
})
export class RentStepComponent implements OnInit {

  items: MenuItem[]

  constructor() { }

  ngOnInit() {
  }
}
