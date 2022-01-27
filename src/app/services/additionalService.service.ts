import { ResponseModel } from './../models/responseModel';
import { CreateAdditionalServiceModel } from '../models/createAdditionalServiceModel';

import { ListResponseModel } from '../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdditionalServiceListModel } from '../models/addionalServiceListModel';

@Injectable({
  providedIn: 'root'
})
export class AditionalServiceService {

  apiUrl:string= "http://localhost:8080/api/additionalservices/"

constructor(private httpClient:HttpClient) { }

getAdditionalService():Observable<ListResponseModel<AdditionalServiceListModel>>{
  return this.httpClient.get<ListResponseModel<AdditionalServiceListModel>>(this.apiUrl+"getall")
}

addAll(services: CreateAdditionalServiceModel[]): Observable<ListResponseModel<AdditionalServiceListModel>> {
  return this.httpClient.post<ListResponseModel<AdditionalServiceListModel>>(this.apiUrl + 'addall/',services);
}
}
