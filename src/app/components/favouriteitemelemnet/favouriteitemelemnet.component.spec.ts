import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteitemelemnetComponent } from './favouriteitemelemnet.component';

describe('FavouriteitemelemnetComponent', () => {
  let component: FavouriteitemelemnetComponent;
  let fixture: ComponentFixture<FavouriteitemelemnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouriteitemelemnetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavouriteitemelemnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
