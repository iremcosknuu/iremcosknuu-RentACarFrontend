import { RentalListModel } from './../../../models/rentalListModel';
import { CityService } from './../../../services/city.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RentalService } from './../../../services/rental.service';
import { Component, OnInit } from '@angular/core';
import { CityListModel } from 'src/app/models/cityListModel';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {

  rentalAddForm:FormGroup
  cities:CityListModel[]=[]
  carId:number
  rental:RentalListModel

  constructor(
    private rentalService:RentalService,
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private cityService:CityService,
    private router:Router
    ) { }

  ngOnInit() {
    this.getCities()
    this.getRouteCarId()
    this.createRentalForm()
  }

  getCities(){
    this.cityService.getCities().subscribe(response => {
      this.cities = response.data
      console.log(response.data)
    })
  }

  getRouteCarId(){
    this.activatedRoute.params.subscribe(params => {
      this.carId =params["carId"]
      console.log(this.carId)
    })
  }

  createRentalForm(){
    this.rentalAddForm = this.formBuilder.group({
      rentDate:["",Validators.required],
      returnDate:["",Validators.required],
      rentedKilometer:["",Validators.required],
      returnedKilometer:["",Validators.required],
      pickUpCityId:["",Validators.required],
      returnCityId:["",Validators.required],
      customerId:[1,Validators.required],
      carId:[this.carId ,Validators.required],
      promotionId:[1,Validators.required]
    })
  }

  add(){

    console.log(this.rentalAddForm.value)

    if(this.rentalAddForm.valid){
      let rentalModel = Object.assign({},this.rentalAddForm.value)
      this.rentalService.addIndividualCustomer(rentalModel).subscribe(response => {
        
        if(response.success){
          this.rental = response.data
          this.toastrService.success(response.message,"Success !")
          this.nextPage()
        }
        else{
          this.toastrService.error(response.message,"Error !")
        }
      })
    }
  }

  nextPage() {
    console.log(this.rental)

    if (this.rental) {
      this.router.navigate(['additionalServiceItem/'+this.rental.id]);
      return;  
    }
  }

}
