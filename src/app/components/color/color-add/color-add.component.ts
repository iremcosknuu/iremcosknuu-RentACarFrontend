import { ToastrService } from 'ngx-toastr';
import { ColorService } from './../../../services/color.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColorListModel } from 'src/app/models/colorListModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colors:ColorListModel[]=[]
  selectedColor:ColorListModel
  colorAddForm:FormGroup
  dataLoaded:boolean = false

  constructor(
    private colorService:ColorService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit() {
    this.getColors()
    this.createColorAddForm() 
  }

  createColorAddForm(){
    this.colorAddForm = this.formBuilder.group({
      name:["",Validators.required]
    })
  }

  add(){
    if ( this.colorAddForm.valid){
      let colorModel = Object.assign({}, this.colorAddForm.value)
      this.colorService.add(colorModel).subscribe(response =>{
        if(response.success){
          this.toastrService.success(response.message,"Successful !")
        }else{
          this.toastrService.error(response.message,"Error !")
        }
      })
    }
  }

  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.dataLoaded = false
      this.colors = response.data
      this.dataLoaded = true
    })
  }

  getColorId(color:ColorListModel){
    this.selectedColor = color
  }

}
