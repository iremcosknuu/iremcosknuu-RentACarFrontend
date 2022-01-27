import { MenuItem } from 'primeng/api';
import { RentalService } from './../../services/rental.service';
import { ActivatedRoute } from '@angular/router';
import { RentalListModel } from './../../models/rentalListModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit {

  rentals:RentalListModel[]=[]
  dataLoaded:boolean = false
  items:MenuItem[]

  constructor(private rentalService:RentalService,private activetedRoute:ActivatedRoute) { }

  ngOnInit():void {
    this.getRentals()

    this.items = [
      {label: 'Araçlar', icon: ' pi pi-car',routerLink: ['']},
      {label: 'Kiralananlar', icon: ' pi pi-check-square' ,routerLink: ['rentals']}   
    ]
  }

  getRentals(){
    this.rentalService.getRentals().subscribe(response => {
      this.dataLoaded = false
      this.rentals = response.data
      this.dataLoaded = true
      console.log(response.data)
    })
  }

}
