import { ResponseModel } from './../models/responseModel';
import { CreateAdditionalServiceModel } from './../models/createAdditionalServiceItemModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdditionalServiceItemListModel } from '../models/additionalServiceItemListModel';
import { ListResponseModel } from '../models/listResponseModel';
import { UpdateAdditionalServiceItemModel } from '../models/updateAdditionalServiceItemModel';

@Injectable({
  providedIn: 'root'
})
export class AdditionalServiceItemService {

  apiUrl:string="http://localhost:8080/api/additionalserviceitems/"

constructor(private httpClient:HttpClient) { }

getAdditionalServiceItems():Observable<ListResponseModel<AdditionalServiceItemListModel>>{
  return this.httpClient.get<ListResponseModel<AdditionalServiceItemListModel>>(this.apiUrl +"find-all")
}

add(additionalServiceItem:CreateAdditionalServiceModel):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"add",additionalServiceItem)
}

delete(id:number):Observable<ResponseModel>{
  return this.httpClient.delete<ResponseModel>(this.apiUrl+"delete/"+id)
}

update(additionalServiceItem:UpdateAdditionalServiceItemModel):Observable<ResponseModel>{
  return this.httpClient.put<ResponseModel>(this.apiUrl + "update",additionalServiceItem)
}
}
