import { RentalListModel } from './../../models/rentalListModel';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from './../../services/payment.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentForm:FormGroup
  rentId:number
  rentals:RentalListModel[]=[]
  rental:RentalListModel

  constructor(
    private formBuilder:FormBuilder,
    private paymentService:PaymentService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private rentalService:RentalService
  ) { }

  ngOnInit() {
  }

  createPaymentAddForm(){
    this.paymentForm = this.formBuilder.group({
      paymentTime:[Date.now(),Validators.required],
      rentalId:[this.rentId,Validators.required],
      cardNo:["",Validators.required],
      expirationDate:["",Validators.required],
      cVV:["",Validators.required]
    })
  }

  add(){

    if(this.paymentForm.valid){
      
      let paymentModel = Object.assign({},this.paymentForm.value)
      this.paymentService.add(paymentModel).subscribe(response => {
        if (response.success) {
          console.log("Başarılı")
          this.toastrService.success(response.message, "Successful !")
        }
        else{
          this.toastrService.error(response.message, "Error !")
        }
      })
    }
  }

  getRouteRentId(){
    this.activatedRoute.params.subscribe(params => {
      this.rentId =params["rentId"]
      console.log(this.rentId)
    })
  }


}
