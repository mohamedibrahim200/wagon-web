import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealersMapComponent } from './dealers-map.component';

describe('DealersMapComponent', () => {
  let component: DealersMapComponent;
  let fixture: ComponentFixture<DealersMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealersMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DealersMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
