import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPaperLocationComponent } from './news-paper-location.component';

describe('NewsPaperLocationComponent', () => {
  let component: NewsPaperLocationComponent;
  let fixture: ComponentFixture<NewsPaperLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsPaperLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsPaperLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
