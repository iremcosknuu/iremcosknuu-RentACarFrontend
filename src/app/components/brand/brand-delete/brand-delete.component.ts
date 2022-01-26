import { ToastrService } from 'ngx-toastr';
import { BrandListModel } from './../../../models/brandListModel';
import { BrandService } from './../../../services/brand.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-delete',
  templateUrl: './brand-delete.component.html',
  styleUrls: ['./brand-delete.component.css']
})
export class BrandDeleteComponent implements OnInit {

  @Input() selectedBrand: BrandListModel

  constructor(
    private brandService:BrandService,
    private toastrService:ToastrService
    ) { }

  ngOnInit():void {
    
  }

  delete(selectedBrand:BrandListModel){
    if(selectedBrand != null){
      this.brandService.delete(selectedBrand.id).subscribe(response => {
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
