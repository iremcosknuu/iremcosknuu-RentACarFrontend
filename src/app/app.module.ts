import { FuelTypeComponent } from './components/fuelType/fuelType.component';
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

import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { ColorComponent } from './components/color/color.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { SegmentComponent } from './components/segment/segment.component';
import { NavComponent } from './components/nav/nav.component';
import { RentalComponent } from './components/rental/rental.component';
import { RentalAddComponent } from './components/rental/rental-add/rental-add.component';
import { CityComponent } from './components/city/city.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    CarDetailComponent,
    BrandAddComponent,
    ColorAddComponent,
    NavComponent,
    CarAddComponent,
    SegmentComponent,
    FuelTypeComponent,
    RentalComponent,
    RentalAddComponent,
    CityComponent
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
    ToastrModule.forRoot({
      positionClass:"toast-top-right"
    })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
