import { FuelTypeListModel } from './../../models/fuelTyepListModel';
import { FuelTypeService } from './../../services/fuelType.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuelType',
  templateUrl: './fuelType.component.html',
  styleUrls: ['./fuelType.component.css']
})
export class FuelTypeComponent implements OnInit {

  constructor(private fuelTypeService:FuelTypeService) { }

  fuelTypes:FuelTypeListModel[]=[]
  dataLoaded: boolean = false;
  selectedFuelType: FuelTypeListModel

  ngOnInit() {
    this.getFuelTypes()
  }

  getFuelTypes(){
    this.fuelTypeService.getFuelTypes().subscribe(response =>{
      this.dataLoaded = false
      this.fuelTypes = response.data
      this.dataLoaded = true 
    })
  }

  getFuelTypeId(fuelType: FuelTypeListModel){
    this.selectedFuelType=fuelType
    console.log(this.selectedFuelType)
  }

  
}
