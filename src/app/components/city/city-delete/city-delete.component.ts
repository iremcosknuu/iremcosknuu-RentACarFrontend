import { CityListModel } from './../../../models/cityListModel';
import { CityService } from 'src/app/services/city.service';
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-city-delete',
  templateUrl: './city-delete.component.html',
  styleUrls: ['./city-delete.component.css']
})
export class CityDeleteComponent implements OnInit {

  @Input() selectedCity: CityListModel

  constructor(
    private cityService:CityService,
    private toastrService:ToastrService
  ) { }

  ngOnInit() {
  }

  delete(selectedCity:CityListModel){
    if(selectedCity != null){
      this.cityService.delete(selectedCity.id).subscribe(response => {
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
