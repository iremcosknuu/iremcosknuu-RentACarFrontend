import { InvoiceComponent } from './components/invoice/invoice.component';
import { AdditionalServiceComponent } from './components/additionalService/additionalService.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AdditionalServiceItemAddComponent } from './components/additionalServiceItem/additionalServiceItem-add/additionalServiceItem-add.component';
import { CityAddComponent } from './components/city/city-add/city-add.component';
import { FuelTypeAddComponent } from './components/fuelType/fuelType-add/fuelType-add.component'; 
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { RentalComponent } from './components/rental/rental.component';
import { RentalAddComponent } from './components/rental/rental-add/rental-add.component';
import { AdditionalServiceItemComponent } from './components/additionalServiceItem/additionalServiceItem.component';
import { RentStepComponent } from './components/rental/rent-step/rent-step.component';

const routes: Routes = [
  {path:'',redirectTo: '',pathMatch:'full', component: CarComponent},
  {path: 'car-detail/:carId', component: CarDetailComponent },
  {path: 'car-carAdd', component: CarAddComponent},
  {path: 'car-brandId/:brandId' , component:CarComponent},
  {path: 'car-brandAdd', component: BrandAddComponent},
  {path: 'car-colorId/:colorId', component: CarComponent},
  {path: 'car-colorAdd', component: ColorAddComponent},
  {path: 'car-fuelTypeId/:fuelTypeId', component:CarComponent},
  {path: 'car-fuelTypeAdd',component:FuelTypeAddComponent},
  {path: 'car-cityAdd',component:CityAddComponent},
  {path: 'rentals',component:RentalComponent},
  {path: 'car-detail/:carId/rental-rentalAdd',component:RentalAddComponent},
  {path: 'additionalServiceItem/:rentId', component:AdditionalServiceItemComponent},
  {path: 'car-additionalServiceItemAdd', component:AdditionalServiceItemAddComponent},
  {path: 'payment/:rentId',component:PaymentComponent},
  {path: 'invoice/:paymentId',component:InvoiceComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
