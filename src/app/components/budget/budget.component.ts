import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../services/budget.service';

import { GetIntoExpensesComponent } from './get-into-expenses';
import { ListExpensesComponent } from './list-expenses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [GetIntoExpensesComponent, ListExpensesComponent],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css',
})
export class BudgetComponent implements OnInit {
  budget = 0;
  constructor(private _budgetService: BudgetService, private router: Router) {
    this.budget = this._budgetService.budget;
  }

  ngOnInit() {
    if (this._budgetService.budget === 0) {
      this.router.navigate(['/get-into-budget']);
    }
  }
}
