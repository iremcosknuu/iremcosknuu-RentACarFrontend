import { CityListModel } from './../../../models/cityListModel';
import { CityService } from 'src/app/services/city.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-city-update',
  templateUrl: './city-update.component.html',
  styleUrls: ['./city-update.component.css']
})
export class CityUpdateComponent implements OnInit {

  @Input() selectedCity:CityListModel
  @Input() updatedName:string

  constructor(
    private cityService:CityService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService
  ) { }

  ngOnInit() {
  }

  update(selectedCity:CityListModel){
      let brandUpdateModel = {id:this.selectedCity.id, name:this.updatedName}
      this.cityService.update(brandUpdateModel).subscribe(response => {
        if(response.success){
          this.toastrService.success(response.message, "Successful !")
        }
        else{
          this.toastrService.error(response.message, "Error !")
        }
      })
    
  }



}
