import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierservicesComponent } from './courierservices.component';

describe('CourierservicesComponent', () => {
  let component: CourierservicesComponent;
  let fixture: ComponentFixture<CourierservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourierservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
