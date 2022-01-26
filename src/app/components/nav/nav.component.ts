import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: 'Yönetim Paneli',
          items: [
              {label: 'Araçlar',routerLink:"car-carAdd"},
              {label: 'Markalar',routerLink:"car-brandAdd"},
              {label: 'Renkler',routerLink:"car-colorAdd"},
              {label: 'Yakıt Tipi',routerLink:"car-fuelTypeAdd"},
              {label: 'Şehirler',routerLink:"car-cityAdd"},
              {label:'Ek Servisler',routerLink:"car-additionalServiceItemAdd"}
          ]
      }
  ];
}
  

}
