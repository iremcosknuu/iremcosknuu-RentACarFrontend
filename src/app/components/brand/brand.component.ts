import { BrandService } from './../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import { BrandListModel } from 'src/app/models/brandListModel';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(private brandService:BrandService) { }

  brands:BrandListModel[]=[]
  dataLoaded: boolean = false
  selectedBrand: BrandListModel

  ngOnInit(): void {
     this.getBrands()
  }

  getBrands(){
      this.brandService.getBrands().subscribe(response=>{
      this.dataLoaded = false
      this.brands = response.data
      this.dataLoaded = true
    })
  }

  getBrandId(brand:BrandListModel){
    this.selectedBrand=brand
  }

}
