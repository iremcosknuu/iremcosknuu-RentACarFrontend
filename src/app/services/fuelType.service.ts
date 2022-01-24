import { ListResponseModel } from './../models/listResponseModel';
import { FuelTypeListModel } from './../models/fuelTyepListModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuelTypeService {

  apiUrl="http://localhost:8080/api/fueltypes/"

constructor(private httpClient:HttpClient) { }

  getFuelTypes():Observable<ListResponseModel<FuelTypeListModel>>{
    return this.httpClient.get<ListResponseModel<FuelTypeListModel>>(this.apiUrl +"getall");
  }

}
