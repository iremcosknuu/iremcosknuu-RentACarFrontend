import { PaymentListModel } from 'src/app/models/paymentListModel';
import { PaymentService } from './../../services/payment.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  paymentId:number
  payment:PaymentListModel

  constructor(
    private paymentService:PaymentService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService
  ) { }

  ngOnInit() {
    this.getRouteCarId()
  }

  getPayments(){
    this.paymentService.getById(this.paymentId).subscribe(response => {
      this.payment = response.data
    })
  }

  getRouteCarId(){
    this.activatedRoute.params.subscribe(params => {
      this.paymentId =params["paymentId"]
      console.log(this.paymentId)
    })
  }

}
