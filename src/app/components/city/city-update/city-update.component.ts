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
  cityUpdateForm:FormGroup

  constructor(
    private cityService:CityService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService
  ) { }

  ngOnInit() {
  }

  updateBrandForm(){
    this.cityUpdateForm = this.formBuilder.group({
        id:[this.selectedCity.id , Validators.required],
        name:[this.selectedCity.name , Validators.required]
    })
  }

  update(){
    if(this.cityUpdateForm.valid){
      console.log(this.updateBrandForm())
      let brandUpdateModel = Object.assign({},this.cityUpdateForm.value)
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



}
