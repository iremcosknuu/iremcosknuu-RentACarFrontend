import { RentalListModel } from './../../models/rentalListModel';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from './../../services/payment.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PaymentListModel } from 'src/app/models/paymentListModel';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentAddForm:FormGroup
  rentId:number
  rentals:RentalListModel[]=[]
  rental:RentalListModel
  payment:PaymentListModel

  constructor(
    private formBuilder:FormBuilder,
    private paymentService:PaymentService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.getRouteRentId();
    this.createPaymentAddForm()
  }

  createPaymentAddForm(){
    this.paymentAddForm = this.formBuilder.group({
      //paymentDate:["",Validators.required],
      rentalId:[this.rentId,Validators.required],
      cardNo:["",Validators.required],
      expirationDate:["",Validators.required],
      cVV:["",Validators.required]
    })
  }

  add(){
    if(this.paymentAddForm.valid){
      
      let paymentModel = Object.assign({},this.paymentAddForm.value)
      this.paymentService.add(paymentModel).subscribe(response => {
        if (response.success) {
          
          this.toastrService.success(response.message,"Success !")
          this.nextPage()
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

  nextPage() {
    this.router.navigate(['additionalServiceItem/'+this.payment.id]);
  }

}
