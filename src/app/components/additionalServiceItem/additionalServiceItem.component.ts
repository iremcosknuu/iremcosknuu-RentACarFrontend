import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { AdditionalServiceItemService } from './../../services/additionalServiceItem.service';
import { Component, OnInit } from '@angular/core';
import { AdditionalServiceItemListModel } from 'src/app/models/additionalServiceItemListModel';
import { AditionalServiceService } from 'src/app/services/additionalService.service';
import { CreateAdditionalServiceModel } from 'src/app/models/createAdditionalServiceModel';


@Component({
  selector: 'app-additionalServiceItem',
  templateUrl: './additionalServiceItem.component.html',
  styleUrls: ['./additionalServiceItem.component.css']
})
export class AdditionalServiceItemComponent implements OnInit {


  additionalServiseItems:AdditionalServiceItemListModel[]=[]
  dataLoaded: boolean=false
  createAdditionalService: CreateAdditionalServiceModel[] = []
  selectedAdditionalServiceItems: AdditionalServiceItemListModel[] = []
  rentalId:number
  additionalServiceItemBasket:CreateAdditionalServiceModel[] = []

  constructor(
    private addtionalServiceItemService:AdditionalServiceItemService,
    private activatedRoute:ActivatedRoute,
    private additionalServiceService:AditionalServiceService,
    private toastrService:ToastrService,
    private router:Router
    ) { }

  ngOnInit() {
    this.getRouteRentalId()
    this.getAdditionalServiceItems()
    
  }

  getAdditionalServiceItems(){
    this.addtionalServiceItemService.getAdditionalServiceItems().subscribe(response => {
      this.dataLoaded = false
      this.additionalServiseItems = response.data
      this.dataLoaded = true      
    })
  }

  add(){  
    console.log(this.additionalServiceItemBasket)
      this.additionalServiceService.addAll(this.additionalServiceItemBasket).subscribe(response => {
        if(response.success){
          this.toastrService.success(response.message, "Successful !")
          this.nextPage()
        }else{
          this.toastrService.error(response.message, "Error !")
        }
      })
  }

  isBasketContainItem(id: number): boolean {
    if (
      this.additionalServiceItemBasket.filter(
        (e) => e.additionalServiceItemId === id
      ).length > 0
    ) {
      return true;
    } else return false;
  }
  
  addAdditionalServiceItem(id: number) {
    let additionalItem : CreateAdditionalServiceModel= {
      rentalId : this.rentalId,
      additionalServiceItemId:id
    }
    this.additionalServiceItemBasket.push(additionalItem);
    this.toastrService.success('Eklendi', 'Başarılı');
    
  }

  getRouteRentalId(){
    this.activatedRoute.params.subscribe(params => {
      
        this.rentalId= params["rentId"]
    })
  }
  
  nextPage() {
    this.router.navigate(['payment/'+this.rentalId]);
    
  }
}
