import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIntoExpensesComponent } from './get-into-expenses.component';

describe('GetIntoExpensesComponent', () => {
  let component: GetIntoExpensesComponent;
  let fixture: ComponentFixture<GetIntoExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetIntoExpensesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetIntoExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
