import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmaionPageComponent } from './confirmaion-page.component';

describe('ConfirmaionPageComponent', () => {
  let component: ConfirmaionPageComponent;
  let fixture: ComponentFixture<ConfirmaionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmaionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmaionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
