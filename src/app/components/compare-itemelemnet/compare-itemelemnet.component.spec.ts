import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareItemelemnetComponent } from './compare-itemelemnet.component';

describe('CompareItemelemnetComponent', () => {
  let component: CompareItemelemnetComponent;
  let fixture: ComponentFixture<CompareItemelemnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompareItemelemnetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompareItemelemnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
