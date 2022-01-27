import { AdditionalServiceItemListModel } from './../../../models/additionalServiceItemListModel';
import { AdditionalServiceItemService } from './../../../services/additionalServiceItem.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-additionalServiceItem-update',
  templateUrl: './additionalServiceItem-update.component.html',
  styleUrls: ['./additionalServiceItem-update.component.css']
})
export class AdditionalServiceItemUpdateComponent implements OnInit {

  @Input() additionalServiceItemService:AdditionalServiceItemService
  @Input() updatedName:string

  constructor() { }

  ngOnInit() {
  }

  update(selectedAdditionalServiceItem:AdditionalServiceItemListModel){

  }

}
