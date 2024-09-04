import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderWithTapsComponent } from './slider-with-taps.component';

describe('SliderWithTapsComponent', () => {
  let component: SliderWithTapsComponent;
  let fixture: ComponentFixture<SliderWithTapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderWithTapsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderWithTapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
