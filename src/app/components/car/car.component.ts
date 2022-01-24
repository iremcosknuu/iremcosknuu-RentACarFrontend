import { MenuItem } from 'primeng/api';
import { CarListModel } from './../../models/carListModel';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  
  cars:CarListModel[]=[]
  dataLoaded:boolean = false
  items: MenuItem[]

  constructor(private carService: CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit():void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['colorId']) {
        this.getCarsByColorId(params['colorId'])
      }
      else if (params['brandId']) {
        this.getCarsByBrandId(params['brandId'])
      }
      else if(params['fuelTypeId']){
        this.getCarsByFuelTypeId(params['fuelTypeId'])
      }
      else {
        this.getCars()
      }
    })

    this.items = [
      {label: 'Araçlar', icon: ' pi pi-car',routerLink: ['']},
      {label: 'Kiralananlar', icon: ' pi pi-check-square' ,routerLink: ['rentals']}   
    ]
  }

  getCars(){
    this.carService.getCars().subscribe(response =>{
      this.dataLoaded = false
      this.cars = response.data
      this.dataLoaded = true
      
    })
  }

  getCarsByColorId(colorId:number){
    this.carService.getByColorId(colorId).subscribe((response)=>{
      this.dataLoaded = false
      this.cars = response.data
      this.dataLoaded = true
    })
  }

  getCarsByBrandId(brandId:number){
    this.carService.getByBrandId(brandId).subscribe((response)=>{
      this.dataLoaded = false
      this.cars = response.data
      this.dataLoaded = true
    })
  }

  getCarsByFuelTypeId(fuelTypeId:number){
    this.carService.getByFuelTypeId(fuelTypeId).subscribe((response)=>{
      this.dataLoaded = false
      this.cars = response.data
      this.dataLoaded = true
    })
  }

}
