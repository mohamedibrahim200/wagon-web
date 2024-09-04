import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAgencyComponent } from './car-agency.component';

describe('CarAgencyComponent', () => {
  let component: CarAgencyComponent;
  let fixture: ComponentFixture<CarAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarAgencyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
