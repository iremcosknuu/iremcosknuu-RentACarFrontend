
import { ActivatedRoute } from '@angular/router';
import { AditionalServiceService } from './../../services/additionalService.service';
import { Component, OnInit } from '@angular/core';
import { AdditionalServiceListModel } from 'src/app/models/addionalServiceListModel';

@Component({
  selector: 'app-additionalService',
  templateUrl: './additionalService.component.html',
  styleUrls: ['./additionalService.component.css']
})
export class AdditionalServiceComponent implements OnInit {

  additionalServices:AdditionalServiceListModel[]=[]
  dataLoaded:boolean = false

  constructor(
    private additionalService:AditionalServiceService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit() {
    this.getAdditionalServices()
  }

  getAdditionalServices(){
    this.additionalService.getAdditionalService().subscribe(response =>{
      this.dataLoaded = false
      this.additionalServices = response.data
      this.dataLoaded = true
      console.log(response.data)
    })
  }


}
