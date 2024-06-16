import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section1dowloandComponent } from './section1dowloand.component';

describe('Section1dowloandComponent', () => {
  let component: Section1dowloandComponent;
  let fixture: ComponentFixture<Section1dowloandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section1dowloandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section1dowloandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
