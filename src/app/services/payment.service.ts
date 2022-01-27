import { PaymentListModel } from './../models/paymentListModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatePaymentModel } from '../models/createPaymentModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl: string="http://localhost:8080/api/payments/"

constructor(private httpClient:HttpClient) { }

add(payment:CreatePaymentModel):Observable<SingleResponseModel<PaymentListModel>>{
  return this.httpClient.post<SingleResponseModel<PaymentListModel>>(this.apiUrl+"add",payment)
}

getById(id:number):Observable<SingleResponseModel<PaymentListModel>>{
  return this.httpClient.get<SingleResponseModel<PaymentListModel>>(this.apiUrl+"findById/"+id)
}

}
