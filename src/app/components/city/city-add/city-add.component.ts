import { CityListModel } from './../../../models/cityListModel';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css']
})
export class CityAddComponent implements OnInit {

  cities:CityListModel[]=[]
  city:CityListModel
  cityAddForm:FormGroup
  selectedCity:CityListModel
  dataLoaded:boolean = false

  constructor(
    private cityService:CityService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCities()
    this.createCityForm()
  }

  createCityForm(){
    this.cityAddForm = this.formBuilder.group({
      name:["",Validators.required]
    })
  }

  getCities(){
    this.cityService.getCities().subscribe(response => {
      this.dataLoaded = false
      this.cities = response.data
      this.dataLoaded = true
    })
  }

  add(){
    if (this.cityAddForm.valid) {
      let cityModel = Object.assign({}, this.cityAddForm.value)
      this.cityService.add(cityModel).subscribe(response => {
        if (response.success) {
          this.toastrService.success(response.message, "Successful !")
        }
        else{
          this.toastrService.error(response.message, "Error !")
        }
      })
    }
  }

  getCityId(city:CityListModel){
    this.selectedCity=city
  }

}
