import { Component, OnDestroy, OnInit } from '@angular/core';
import { BudgetService } from '../../../services/budget.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-expenses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-expenses.component.html',
  styleUrl: './list-expenses.component.css',
})
export class ListExpensesComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  budget: number;
  rest: number;
  listExpenses: any[] = [];
  constructor(private _budgetService: BudgetService) {
    this.subscription = this._budgetService.getExpenses().subscribe((data) => {
      this.rest = this.rest - data.quantity;
      this.listExpenses.push(data);
    });

    this.budget = 0;
    this.rest = 0;
  }
  apllyRestColor() {
    if (this.budget / 4 > this.rest) {
      return 'alert alert-danger';
    } else if (this.budget / 2 > this.rest) {
      return 'alert alert-warning';
    } else {
      return 'alert alert-secondary';
    }
  }

  ngOnInit(): void {
    this.budget = this._budgetService.budget;
    this.rest = this._budgetService.rest;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
