import { ToastrService } from 'ngx-toastr';
import { ColorService } from './../../../services/color.service';
import { ColorListModel } from './../../../models/colorListModel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-delete',
  templateUrl: './color-delete.component.html',
  styleUrls: ['./color-delete.component.css']
})
export class ColorDeleteComponent implements OnInit {

 @Input() selectedColor:ColorListModel

  constructor(
    private colorService:ColorService,
    private toastrService:ToastrService
  ) { }

  ngOnInit() {
  }

  delete(selectedColor:ColorListModel){
    if(selectedColor != null){
      this.colorService.delete(selectedColor.id).subscribe(response => {
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
