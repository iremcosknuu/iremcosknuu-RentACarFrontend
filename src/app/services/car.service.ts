import { CreateCarModel } from './../models/createCarModel';
import { ResponseModel } from './../models/responseModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { CarListModel } from './../models/carListModel';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl: string="http://localhost:8080/api/cars/"

constructor(private httpClient: HttpClient) { }

getCars():Observable<ListResponseModel<CarListModel>>{
  return this.httpClient.get<ListResponseModel<CarListModel>>(this.apiUrl + "getall?pageNo=1&pageSize=10")
}

getById(carId : number):Observable<SingleResponseModel<CarListModel>>{
  return this.httpClient.get<SingleResponseModel<CarListModel>>(this.apiUrl+"findById/"+ carId)
}

getByColorId(colorId:number):Observable<ListResponseModel<CarListModel>>{
  return this.httpClient.get<ListResponseModel<CarListModel>>(this.apiUrl+"findByColorId/"+ colorId)
}

getByBrandId(brandId:number):Observable<ListResponseModel<CarListModel>>{
  return this.httpClient.get<ListResponseModel<CarListModel>>(this.apiUrl+"findByBrandId/"+brandId)
}

getByFuelTypeId(fuelTypeId:number):Observable<ListResponseModel<CarListModel>>{
  return this.httpClient.get<ListResponseModel<CarListModel>>(this.apiUrl+"findByFuelTypeId/"+fuelTypeId)
}

add(car: CreateCarModel):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"add",car)
}

}
