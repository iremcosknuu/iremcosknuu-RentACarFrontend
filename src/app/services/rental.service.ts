import { SingleResponseModel } from './../models/singleResponseModel';
import { CreateRentalModel } from './../models/createRentalModel';
import { RentalListModel } from './../models/rentalListModel';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl: string = "http://localhost:8080/api/rentals/"

constructor(private httClient:HttpClient) { }

getRentals():Observable<ListResponseModel<RentalListModel>>{
  return this.httClient.get<ListResponseModel<RentalListModel>>(this.apiUrl+"getall?pageNo=1&pageSize=10")
}

addIndividualCustomer(rental: CreateRentalModel):Observable<SingleResponseModel<RentalListModel>>{
  return this.httClient.post<SingleResponseModel<RentalListModel>>(this.apiUrl + "addindividualcustomer",rental)
}

addCorporateCustomer(rental : CreateRentalModel):Observable<SingleResponseModel<RentalListModel>>{
  return this.httClient.post<SingleResponseModel<RentalListModel>>(this.apiUrl + "addcorporatecustomer",rental)
}

getById(id:number):Observable<SingleResponseModel<RentalListModel>>{
  return this.httClient.get<SingleResponseModel<RentalListModel>>(this.apiUrl+"findById/"+id)
}

}
