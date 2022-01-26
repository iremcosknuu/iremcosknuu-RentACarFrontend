import { AdditionalServiceItemListModel } from './../../../models/additionalServiceItemListModel';
import { AdditionalServiceItemService } from './../../../services/additionalServiceItem.service';
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-additionalServiceItem-delete',
  templateUrl: './additionalServiceItem-delete.component.html',
  styleUrls: ['./additionalServiceItem-delete.component.css']
})
export class AdditionalServiceItemDeleteComponent implements OnInit {

  @Input() selectedAdditionalServiceItem:AdditionalServiceItemListModel

  constructor(    
    private additionalServiceItemService:AdditionalServiceItemService,
    private toastrService:ToastrService) { }

  ngOnInit() {
  }

  delete(selectedAdditionalServiceItem:AdditionalServiceItemListModel){
    if(selectedAdditionalServiceItem != null){
      this.additionalServiceItemService.delete(selectedAdditionalServiceItem.id).subscribe(response => {
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
