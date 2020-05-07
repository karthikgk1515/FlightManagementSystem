import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchscheduledflightComponent } from './searchscheduledflight.component';

describe('SearchscheduledflightComponent', () => {
  let component: SearchscheduledflightComponent;
  let fixture: ComponentFixture<SearchscheduledflightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchscheduledflightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchscheduledflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
