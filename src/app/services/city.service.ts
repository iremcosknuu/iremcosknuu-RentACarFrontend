import { UpdateCityModel } from './../models/updateCityModel';
import { CreateCityModel } from './../models/createCityModel';
import { ResponseModel } from './../models/responseModel';
import { CityListModel } from './../models/cityListModel';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  apiUrl:string = "http://localhost:8080/api/cities/"
constructor(private htppClient:HttpClient) { }

getCities():Observable<ListResponseModel<CityListModel>>{
 return this.htppClient.get<ListResponseModel<CityListModel>>(this.apiUrl+"getall")
}

add(city:CreateCityModel):Observable<ResponseModel>{
  return this.htppClient.post<ResponseModel>(this.apiUrl+"add",city)
}

delete(id:number):Observable<ResponseModel>{
  return this.htppClient.delete<ResponseModel>(this.apiUrl+"delete/"+id)
}

update(city:UpdateCityModel):Observable<ResponseModel>{
  return this.htppClient.put<ResponseModel>(this.apiUrl+"update",city)
}

}
