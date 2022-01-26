import { UpdateBrandModel } from './../models/updateBrandModel';
import { ResponseModel } from './../models/responseModel';
import { ColorListModel } from '../models/colorListModel';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateColorModel } from '../models/createColorModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl: string = "http://localhost:8080/api/colors/"

constructor(private httpClinet : HttpClient) { }

getColors():Observable<ListResponseModel<ColorListModel>>{
  return this.httpClinet.get<ListResponseModel<ColorListModel>>(this.apiUrl+"getall")
}

add(color: CreateColorModel):Observable<ResponseModel>{
  return this.httpClinet.post<ResponseModel>(this.apiUrl+"add",color)
}

delete(id:number):Observable<ResponseModel>{
  return this.httpClinet.delete<ResponseModel>(this.apiUrl+"delete/"+id)
}

update(color:UpdateBrandModel):Observable<ResponseModel>{
  return this.httpClinet.put<ResponseModel>(this.apiUrl+"update",color)
}

}
