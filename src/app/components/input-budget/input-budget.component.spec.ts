import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBudgetComponent } from './input-budget.component';

describe('InputBudgetComponent', () => {
  let component: InputBudgetComponent;
  let fixture: ComponentFixture<InputBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBudgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
