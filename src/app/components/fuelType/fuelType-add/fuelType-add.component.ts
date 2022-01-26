import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuelTypeService } from './../../../services/fuelType.service';
import { FuelTypeListModel } from './../../../models/fuelTyepListModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuelType-add',
  templateUrl: './fuelType-add.component.html',
  styleUrls: ['./fuelType-add.component.css']
})
export class FuelTypeAddComponent implements OnInit {

  fuelTypes:FuelTypeListModel[]=[]
  fuelType:FuelTypeListModel
  fuelTypeAddForm:FormGroup
  selectedFuelType:FuelTypeListModel
  dataLoaded:boolean = false

  constructor(
    private fuelTypeService:FuelTypeService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService
  ) { }

  ngOnInit():void {
    this.getFuelTypes()
    this.createBrandAddForm()
  }

  createBrandAddForm(){
    this.fuelTypeAddForm = this.formBuilder.group({
      name:["", Validators.required]
    })
  }

  getFuelTypes(){
    this.fuelTypeService.getFuelTypes().subscribe(response=>{
    this.dataLoaded = false
    this.fuelTypes = response.data
    this.dataLoaded = true
  })
}

  add(){
    if (this.fuelTypeAddForm.valid) {
      let brandModel = Object.assign({}, this.fuelTypeAddForm.value)
      this.fuelTypeService.add(brandModel).subscribe(response => {
        if (response.success) {
          this.toastrService.success(response.message, "Successful !")
        }
        else{
          this.toastrService.error(response.message, "Error !")
        }
      })
    }
  }

  getFuelTypeId(fuelType:FuelTypeListModel){
    this.selectedFuelType=fuelType
  }

}
