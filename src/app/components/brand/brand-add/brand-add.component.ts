import { BrandService } from './../../../services/brand.service';

import { Component, OnInit } from '@angular/core';
import { BrandListModel } from 'src/app/models/brandListModel';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brands:BrandListModel[]=[]
  brand:BrandListModel
  brandAddForm:FormGroup
  selectedBrand: BrandListModel
  dataLoaded:boolean = false

  constructor(
    private brandService:BrandService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit():void {
    this.getBrands()
    this.createBrandAddForm()
  }

  createBrandAddForm(){
    this.brandAddForm = this.formBuilder.group({
      name:["", Validators.required]
    })
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
    this.dataLoaded = false
    this.brands = response.data
    this.dataLoaded = true
  })
}

  add(){
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({}, this.brandAddForm.value)
      this.brandService.add(brandModel).subscribe(response => {
        if (response.success) {
          this.toastrService.success(response.message, "Successful !")
        }
        else{
          this.toastrService.error(response.message, "Error !")
        }
      })
    }
  }

  getBrandId(brand:BrandListModel){
    this.selectedBrand=brand
  }
  
}
