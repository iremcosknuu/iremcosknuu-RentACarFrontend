import { ToastrService } from 'ngx-toastr';
import { FuelTypeService } from './../../../services/fuelType.service';
import { FuelTypeListModel } from './../../../models/fuelTyepListModel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuelType-delete',
  templateUrl: './fuelType-delete.component.html',
  styleUrls: ['./fuelType-delete.component.css']
})
export class FuelTypeDeleteComponent implements OnInit {

@Input() selectedFuelType: FuelTypeListModel

  constructor(
    private fuelTypeService:FuelTypeService,
    private toastrService:ToastrService
  ) { }

  ngOnInit():void {
  }

  delete(selectedFuelType:FuelTypeListModel){
    if(selectedFuelType!= null){
      this.fuelTypeService.delete(selectedFuelType.id).subscribe(response => {
        if(response.success){
          this.toastrService.success(response.message, "Successful !")
        }
        else{
          this.toastrService.error(response.message, "Error !")
        }
      })
    }
  }

}
