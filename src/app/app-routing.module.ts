import { CarAddComponent } from './components/car/car-add/car-add.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { RentalComponent } from './components/rental/rental.component';
import { RentalAddComponent } from './components/rental/rental-add/rental-add.component';

const routes: Routes = [
  {path:'',redirectTo: '',pathMatch:'full', component: CarComponent},
  {path: 'car-detail/:carId', component: CarDetailComponent },
  {path: 'car-colorId/:colorId' ,component: CarComponent},
  {path: 'car-brandId/:brandId' , component:CarComponent},
  {path: 'car-fuelTypeId/:fuelTypeId', component:CarComponent},
  {path: 'car-brandAdd',component: BrandAddComponent},
  {path: 'car-colorAdd',component: ColorAddComponent},
  {path: 'car-carAdd',component: CarAddComponent},
  {path: 'rentals',component:RentalComponent},
  {path: 'car-detail/:carId/rental-rentalAdd',component:RentalAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
