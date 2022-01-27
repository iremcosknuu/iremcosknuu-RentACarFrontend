import { BrandListModel } from './../../../models/brandListModel';
import { ToastrService } from 'ngx-toastr';
import { UpdateBrandModel } from './../../../models/updateBrandModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandService } from './../../../services/brand.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  @Input() selectedBrand:BrandListModel
  @Input () updatedName:string
  brandUpdateForm:FormGroup

  constructor(
    private brandService:BrandService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService
    ) { }

  ngOnInit() {
  //  this.updateBrandForm()
  }
/*
  updateBrandForm(){
    this.brandUpdateForm = this.formBuilder.group({
        id:[this.selectedBrand.id , Validators.required],
        name:[this.selectedBrand.name , Validators.required]
    })
    console.log(this.selectedBrand);
  }
*/
  update(selectedBrand: BrandListModel){ 
    console.log(selectedBrand);
      let brandUpdateModel = {id:this.selectedBrand.id, name:this.updatedName}
      
      this.brandService.update(brandUpdateModel).subscribe(response => {
        if(response.success){
          this.toastrService.success(response.message, "Successful !")
        }
        else{
          this.toastrService.error(response.message, "Error !")
        }
      })
   
  }

}
