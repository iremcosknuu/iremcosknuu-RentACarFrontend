import { ColorListModel } from './../../models/colorListModel';
import { ColorService } from './../../services/color.service';
import { BrandService } from './../../services/brand.service';
import { CarListModel } from './../../models/carListModel';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandListModel } from 'src/app/models/brandListModel';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  
  cars:CarListModel[]=[]
  dataLoaded:boolean = false

  constructor(private carService: CarService,private activatedRoute:ActivatedRoute) { }

 

  ngOnInit():void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['colorId']) {
        this.getCarsByColorId(params['colorId'])
      }
      if (params['brandId']) {
        this.getCarsByBrandId(params['brandId'])
      } else {
        this.getCars()
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response =>{
      this.dataLoaded = false
      this.cars = response.data
      this.dataLoaded = true
      console.log(this.cars);
      
    })
  }

  getCarsByColorId(colorId:number){
    this.carService.getByColorId(colorId).subscribe((response)=>{
      this.dataLoaded = false
      this.cars = response.data
      this.dataLoaded = true
      console.log(this.cars)
    })
  }

  getCarsByBrandId(brandId:number){
    this.carService.getByBrandId(brandId).subscribe((response)=>{
      this.dataLoaded = false
      this.cars = response.data
      this.dataLoaded = true
      console.log(this.cars)
    })
  }

}
