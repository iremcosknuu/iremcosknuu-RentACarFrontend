import { AdditionalServiceItemService } from './../../../services/additionalServiceItem.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdditionalServiceItemListModel } from 'src/app/models/additionalServiceItemListModel';

@Component({
  selector: 'app-additionalServiceItem-add',
  templateUrl: './additionalServiceItem-add.component.html',
  styleUrls: ['./additionalServiceItem-add.component.css']
})
export class AdditionalServiceItemAddComponent implements OnInit {

  additionalServiceItems:AdditionalServiceItemListModel[]=[]
  additionalServiceItem:AdditionalServiceItemListModel
  additionalServiceItemAddForm:FormGroup
  selectedAdditionalServiceItem: AdditionalServiceItemListModel
  dataLoaded:boolean = false

  constructor(
    private additionalServiceItemService:AdditionalServiceItemService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
  ) { }

  ngOnInit() {
    this.getAdditionalServiceItems()
    this.createAdditionalServiceItemAddForm()
  }

  createAdditionalServiceItemAddForm(){
    this.additionalServiceItemAddForm = this.formBuilder.group({
      name:["", Validators.required]
    })
  }

  getAdditionalServiceItems(){
    this.additionalServiceItemService.getAdditionalServiceItems().subscribe(response=>{
    this.dataLoaded = false
    this.additionalServiceItems = response.data
    this.dataLoaded = true
  })
}

  add(){
    if (this.additionalServiceItemAddForm.valid) {
      let brandModel = Object.assign({}, this.additionalServiceItemAddForm.value)
      this.additionalServiceItemService.add(brandModel).subscribe(response => {
        if (response.success) {
          this.toastrService.success(response.message, "Successful !")
        }
        else{
          this.toastrService.error(response.message, "Error !")
        }
      })
    }
  }

  getadditionalServiceItemId(additionalServiceItem:AdditionalServiceItemListModel){
    this.selectedAdditionalServiceItem=additionalServiceItem
  }

}
