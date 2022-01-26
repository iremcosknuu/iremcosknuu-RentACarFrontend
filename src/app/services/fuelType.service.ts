import { UpdateColorModel } from './../models/updateColorModel';
import { ResponseModel } from './../models/responseModel';
import { CreateFuelTypeModel } from './../models/createFuelTypeModel';
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

  add(fuelType:CreateFuelTypeModel):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add" , fuelType)
  }

  delete(id:number):Observable<ResponseModel>{
    return this.httpClient.delete<ResponseModel>(this.apiUrl + "delete/" + id)
  }

  update(color: UpdateColorModel):Observable<ResponseModel>{
    return this.httpClient.put<ResponseModel>(this.apiUrl+"update",color)
  }

}
