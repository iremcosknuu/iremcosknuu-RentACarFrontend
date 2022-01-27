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
  @Input() updatedName:string

  constructor(
    private colorService:ColorService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService
    ) { }

  ngOnInit() {
  }


  update(selectedColor:ColorListModel){

      let brandUpdateModel = {id:this.selectedColor.id, name:this.updatedName}
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
