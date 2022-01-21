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

  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private brandService:BrandService,
    private colorService:ColorService,
    private segmentService:SegmentService
    ) { }

  ngOnInit() {
    this.getBrands()
    this.getColors()
    this.getSegments()
    this.createCarAddForm()
  }

  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      name:["",Validators.required],
      brandName:["",Validators.required],
      colorName:["",Validators.required],
      dailyPrice:["",Validators.required],
      model:["",Validators.required],
      findexScore:["",Validators.required],
      kilometer:["",Validators.required],
      description:["",Validators.required],
      minAge:["",Validators.required],
      segmentName:["",Validators.required]
    })
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

  add(){
    if(this.carAddForm.valid){
      let carModel = Object.assign({},this.carAddForm.value)
      this.carService.add(carModel).subscribe(response =>{
        if(response.success){
          this.toastrService.success(response.message, "Successful !")
        }
        else{
          this.toastrService.error(response.message,"Error !")
        }
      })
    }
  }

}
