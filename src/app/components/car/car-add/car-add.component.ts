import { FuelTypeService } from './../../../services/fuelType.service';
import { SegmentService } from './../../../services/segment.service';
import { ColorService } from './../../../services/color.service';
import { BrandService } from './../../../services/brand.service';
import { ColorListModel } from 'src/app/models/colorListModel';
import { BrandListModel } from './../../../models/brandListModel';
import { CarService } from './../../../services/car.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarListModel } from './../../../models/carListModel';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SegmentListModel } from 'src/app/models/segmentListModel';
import { FuelTypeListModel } from 'src/app/models/fuelTyepListModel';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm:FormGroup
  car:CarListModel
  brands:BrandListModel[]=[]
  colors:ColorListModel[]=[]
  segments:SegmentListModel[]=[]
  fuelTypes:FuelTypeListModel[]=[]

  constructor(
    private carService:CarService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private brandService:BrandService,
    private colorService:ColorService,
    private segmentService:SegmentService,
    private fuelTypeService:FuelTypeService
    ) { }

  ngOnInit() {
    this.getBrands()
    this.getColors()
    this.getSegments()
    this.getFuelTypes()
    this.createCarAddForm()
  }
  
  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands=response.data
    })
  }

  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors=response.data
    })
  }

  getSegments(){
    this.segmentService.getSegments().subscribe(response =>{
      this.segments = response.data
    })
  }

  getFuelTypes(){
    this.fuelTypeService.getFuelTypes().subscribe(response =>{
      this.fuelTypes = response.data
    })
  }

  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      name:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      dailyPrice:["",Validators.required],
      modelYear:["",Validators.required],
      findexScore:["",Validators.required],
      kilometer:["",Validators.required],
      description:["",Validators.required],
      minAge:["",Validators.required],
      segmentId:["",Validators.required],
      fuelTypeId:["",Validators.required],
      imageUrl:["",Validators.required]
    })  
  }

  add(){
    if (this.carAddForm.valid) {
      let carModel= Object.assign({},this.carAddForm.value)
      this.carService.add(carModel).subscribe(response => {
        if (response.success) {
          this.toastrService.success(response.message, "Successful !")
        }
        else{
          this.toastrService.error(response.message, "Error !")
        }
      })
    }
  
    }
  

}
