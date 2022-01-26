import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';
import { ColorListModel } from 'src/app/models/colorListModel';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  @Input() selectedColor:ColorListModel
  colorUpdateForm:FormGroup

  constructor(
    private colorService:ColorService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService
    ) { }

  ngOnInit() {
  }

  updateColorForm(){
    this.colorUpdateForm = this.formBuilder.group({
        id:[this.selectedColor.id , Validators.required],
        name:[this.selectedColor.name , Validators.required]
    })
  }

  update(){
    if(this.colorUpdateForm.valid){
      console.log(this.updateColorForm())
      let brandUpdateModel = Object.assign({},this.colorUpdateForm.value)
      this.colorService.update(brandUpdateModel).subscribe(response => {
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
