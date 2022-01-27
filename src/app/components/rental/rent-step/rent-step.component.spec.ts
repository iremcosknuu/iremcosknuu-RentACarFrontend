/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RentStepComponent } from './rent-step.component';

describe('RentStepComponent', () => {
  let component: RentStepComponent;
  let fixture: ComponentFixture<RentStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
