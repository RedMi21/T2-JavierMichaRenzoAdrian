import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyreCalculatorComponent } from './tyre-calculator.component';

describe('TyreCalculatorComponent', () => {
  let component: TyreCalculatorComponent;
  let fixture: ComponentFixture<TyreCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TyreCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TyreCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
