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

}
