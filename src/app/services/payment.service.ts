import { ResponseModel } from './../models/responseModel';
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

add(payment:CreatePaymentModel):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"add",payment)
}

}
