import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatescheduleflightComponent } from './updatescheduleflight.component';

describe('UpdatescheduleflightComponent', () => {
  let component: UpdatescheduleflightComponent;
  let fixture: ComponentFixture<UpdatescheduleflightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatescheduleflightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatescheduleflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
