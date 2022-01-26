import { CarService } from './../../../services/car.service';
import { CarListModel } from './../../../models/carListModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car:CarListModel | any;
  dataLoaded = false;
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.getById(params['carId'])
    })

  }

  getById(carId:number){
    this.carService.getById(carId).subscribe((response)=>{
      this.dataLoaded = false;
      this.car = response.data;
      this.dataLoaded = true;
      console.log(this.car)
    })
  }

}
