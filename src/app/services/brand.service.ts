import { ResponseModel } from './../models/responseModel';
import { BrandListModel } from './../models/brandListModel';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateBrandModel } from './../models/createBrandModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl: string="http://localhost:8080/api/brands/"
  constructor(private httpClient: HttpClient) { }

  getBrands():Observable<ListResponseModel<BrandListModel>>{
    return this.httpClient.get<ListResponseModel<BrandListModel>>(this.apiUrl+"getall")
  }

  add(brand: CreateBrandModel):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",brand)
  }

  delete(id:number):Observable<ResponseModel>{
    return this.httpClient.delete<ResponseModel>(this.apiUrl+"delete/"+id)
  }

  update(brand: CreateBrandModel):Observable<ResponseModel>{
    return this.httpClient.put<ResponseModel>(this.apiUrl+"update",brand)
  }

}
