import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { CarComponent } from './components/car/car.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { DataViewModule } from 'primeng/dataview';
import { PasswordModule } from 'primeng/password';
import { Dropdown ,DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CardModule } from 'primeng/card';
import { ListboxModule } from 'primeng/listbox';
import {ToastrModule} from 'ngx-toastr';
import {MenubarModule} from 'primeng/menubar';
import {ToastModule} from 'primeng/toast';
import {InputNumberModule} from 'primeng/inputnumber';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CheckboxModule} from 'primeng/checkbox';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {StepsModule} from 'primeng/steps';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BrandComponent } from './components/brand/brand.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { BrandDeleteComponent } from './components/brand/brand-delete/brand-delete.component';
import { ColorComponent } from './components/color/color.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { ColorDeleteComponent } from './components/color/color-delete/color-delete.component';
import { FuelTypeComponent } from './components/fuelType/fuelType.component';
import { FuelTypeUpdateComponent } from './components/fuelType/fuelType-update/fuelType-update.component';
import { FuelTypeDeleteComponent } from './components/fuelType/fuelType-delete/fuelType-delete.component';
import { FuelTypeAddComponent } from './components/fuelType/fuelType-add/fuelType-add.component';
import { SegmentComponent } from './components/segment/segment.component';
import { CityComponent } from './components/city/city.component';
import { CityDeleteComponent } from './components/city/city-delete/city-delete.component';
import { CityUpdateComponent } from './components/city/city-update/city-update.component';
import { CityAddComponent } from './components/city/city-add/city-add.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { AdditionalServiceItemComponent } from './components/additionalServiceItem/additionalServiceItem.component';
import { AdditionalServiceComponent } from './components/additionalService/additionalService.component';
import { AdditionalServiceItemDeleteComponent } from './components/additionalServiceItem/additionalServiceItem-delete/additionalServiceItem-delete.component';
import { AdditionalServiceItemAddComponent } from './components/additionalServiceItem/additionalServiceItem-add/additionalServiceItem-add.component';
import { RentalComponent } from './components/rental/rental.component';
import { RentalAddComponent } from './components/rental/rental-add/rental-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BrandComponent,
    BrandAddComponent,
    BrandDeleteComponent,
    BrandUpdateComponent,
    ColorComponent,
    ColorAddComponent,
    ColorDeleteComponent,
    ColorUpdateComponent,
    FuelTypeComponent,
    FuelTypeAddComponent,
    FuelTypeDeleteComponent,
    FuelTypeUpdateComponent,
    SegmentComponent,
    CityComponent,
    CityAddComponent,
    CityUpdateComponent,
    CityDeleteComponent,
    CarComponent,
    CarDetailComponent,
    CarAddComponent,
    RentalComponent,
    RentalAddComponent,
    AdditionalServiceComponent,
    AdditionalServiceItemComponent,
    AdditionalServiceItemAddComponent,
    AdditionalServiceItemDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataViewModule,
    DropdownModule,
    TabViewModule,
    InputTextModule,
    RatingModule,
    ButtonModule,
    PanelModule,
    PasswordModule,
    CardModule,
    ListboxModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MenubarModule,
    ToastModule,
    InputNumberModule,
    CheckboxModule,
    TabMenuModule,
    VirtualScrollerModule,
    TableModule,
    CalendarModule,
    ToggleButtonModule,
    StepsModule,
    ToastrModule.forRoot({
      positionClass:"toast-top-right"
    })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
