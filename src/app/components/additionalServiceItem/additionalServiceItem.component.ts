import { AdditionalServiceItemService } from './../../services/additionalServiceItem.service';
import { Component, OnInit } from '@angular/core';
import { AdditionalServiceItemListModel } from 'src/app/models/additionalServiceItemListModel';


@Component({
  selector: 'app-additionalServiceItem',
  templateUrl: './additionalServiceItem.component.html',
  styleUrls: ['./additionalServiceItem.component.css']
})
export class AdditionalServiceItemComponent implements OnInit {


  additionalServiseItems:AdditionalServiceItemListModel[]=[]
  dataLoaded: boolean=false
  checked: boolean =false
  additionalServiseItem:AdditionalServiceItemListModel

  constructor(private addtionalServiceItemService:AdditionalServiceItemService) { }

  ngOnInit() {
    this.getAdditionalServiceItems()
  }

  getAdditionalServiceItems(){
    this.addtionalServiceItemService.getAdditionalServiceItems().subscribe(response => {
      this.dataLoaded = false
      this.additionalServiseItems = response.data
      this.dataLoaded = true
      console.log(response.data);
      
    })
  }

}
