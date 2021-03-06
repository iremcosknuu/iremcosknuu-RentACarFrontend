import { BrandService } from './../../services/brand.service';
import { ColorService } from './../../services/color.service';
import { ColorListModel } from './../../models/colorListModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  constructor(private colorService:ColorService) { }

  colors:ColorListModel[]=[]
  dataLoaded = false
  selectedColor:ColorListModel

  ngOnInit(): void {
    this.getColors()
  }

  getColors(){
    this.colorService.getColors().subscribe(response =>{
      this.dataLoaded = false
      this.colors = response.data
      this.dataLoaded = true
    })
  }

  getColorId(color:ColorListModel){
    this.selectedColor=color
  }

}
