import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  budget: number;
  rest: number;
  constructor() {
    this.budget = 0;
    this.rest = 0;
  }
}
