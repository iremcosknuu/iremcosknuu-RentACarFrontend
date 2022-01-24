import { CityService } from './../../services/city.service';
import { Component, OnInit } from '@angular/core';
import { CityListModel } from 'src/app/models/cityListModel';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(private cityService:CityService) { }

  cities:CityListModel[]=[]
  dataLoaded: boolean = false
  selectedBrand: CityListModel

  ngOnInit() {
    this.getCities()
  }

  getCities(){
    this.cityService.getCities().subscribe(response => {
      this.dataLoaded = false
      this.cities = response.data
      this.dataLoaded = true
    })
  }

}
