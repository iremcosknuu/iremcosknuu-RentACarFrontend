import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuelTypeService } from './../../../services/fuelType.service';
import { Component, Input, OnInit } from '@angular/core';
import { FuelTypeListModel } from 'src/app/models/fuelTyepListModel';

@Component({
  selector: 'app-fuelType-update',
  templateUrl: './fuelType-update.component.html',
  styleUrls: ['./fuelType-update.component.css']
})
export class FuelTypeUpdateComponent implements OnInit {

  @Input() selectedFuelType:FuelTypeListModel
  @Input() updatedName:string

  constructor(
    private fuelTypeService:FuelTypeService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService
  ) { }

  ngOnInit() {
    
  }


  update(selectedFuelType:FuelTypeListModel){
    
      let fuelTypeUpdateModel = {id:this.selectedFuelType.id, name:this.updatedName}
      this.fuelTypeService.update(fuelTypeUpdateModel).subscribe(response => {
        if(response.success){
          this.toastrService.success(response.message, "Successful !")
        }
        else{
          this.toastrService.error(response.message, "Error !")
        }
      })
  }

}
