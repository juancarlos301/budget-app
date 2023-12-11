import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BudgetService } from '../../../services/budget.service';

@Component({
  selector: 'app-get-into-expenses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './get-into-expenses.component.html',
  styleUrl: './get-into-expenses.component.css',
})
export class GetIntoExpensesComponent {
  nameExpense: string;
  quantity: number;
  errorForm: boolean;
  textError: string;

  constructor(private _budgetService: BudgetService) {
    this.errorForm = false;
    this.nameExpense = '';
    this.quantity = 0;
    this.textError = "Expense's name or expense's quantity incorrect.";
  }

  addExpense() {
    if (this.quantity > this._budgetService.rest) {
      this.errorForm = true;
      this.textError = 'quantity enter is major than your budget.';
      return;
    }
    if (this.nameExpense === '' || this.quantity <= 0) {
      this.errorForm = true;
      this.textError = "Expense's name or expense's quantity incorrect.";
    } else {
      const expense = {
        name: this.nameExpense,
        quantity: this.quantity,
      };
      this._budgetService.addExpense(expense);
      this.errorForm = false;
      this.nameExpense = '';
      this.quantity = 0;
    }
  }
}
