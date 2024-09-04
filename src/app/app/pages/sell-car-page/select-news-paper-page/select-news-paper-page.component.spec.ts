import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNewsPaperPageComponent } from './select-news-paper-page.component';

describe('SelectNewsPaperPageComponent', () => {
  let component: SelectNewsPaperPageComponent;
  let fixture: ComponentFixture<SelectNewsPaperPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectNewsPaperPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectNewsPaperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
