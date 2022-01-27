import { RentalListModel } from './../../models/rentalListModel';
import { ResponseModel } from './../../models/responseModel';
import { RentalService } from './../../services/rental.service';
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
  rental:RentalListModel
  columns: any[]
  exportColumns: any[];

  constructor(
    private paymentService:PaymentService,
    private activatedRoute:ActivatedRoute,
    private rentalService:RentalService,
    private toastrService:ToastrService
  ) { }

  ngOnInit() {
    this.getRouteRentId()
    this.getPayment()
    this.getRental()
  }

  getPayment(){
    this.paymentService.getById(this.paymentId).subscribe(response => {
      this.payment = response.data
    })
  }

  getRental(){
    this.rentalService.getById(this.payment.rental_id).subscribe(response => {
      this.rental = response.data
    })
  }

  getRouteRentId(){
    this.activatedRoute.params.subscribe(params => {
      this.paymentId =params["paymentId"]
      console.log(this.paymentId)
    })
  }

  setColumnsValue(){
    this.columns = [
      { field: 'brandName', header: 'Marka' },
      { field: 'dailyPrice', header: 'Günlük Ücret' },
      { field: 'totalAmount', header: 'Toplam Tutar' },
      { field: 'rentedCity', header: 'Kiralanan Şehir' },
      { field: 'returnedCity', header: 'Teslim Edlen Şehir' },
      { field: 'rentDate', header: 'Kiralanan Gün' },
      { field: 'returnDate', header: 'Teslim Edilen Gün' }
  ];
  }
  setExportColumns(){
    this.exportColumns = this.columns.map(col => ({title: col.header, dataKey: col.field}));
    }

}
