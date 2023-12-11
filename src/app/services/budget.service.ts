import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  budget: number;
  rest: number;
  private expenses$ = new Subject<any>();
  constructor() {
    this.budget = 0;
    this.rest = 0;
  }
  addExpense(expense: any) {
    this.rest = this.rest - expense.quantity;
    this.expenses$.next(expense);
  }

  getExpenses(): Observable<any> {
    return this.expenses$.asObservable();
  }
}
