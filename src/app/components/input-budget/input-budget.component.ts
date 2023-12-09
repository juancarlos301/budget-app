import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BudgetService } from '../../services/budget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-budget',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './input-budget.component.html',
  styleUrl: './input-budget.component.css',
})
export class InputBudgetComponent {
  quantity: number;
  incorrectQuanity: boolean;

  constructor(private _budgetService: BudgetService, private router: Router) {
    this.incorrectQuanity = false;
    this.quantity = 0;
  }

  add() {
    if (this.quantity > 0) {
      this.incorrectQuanity = false;
      this._budgetService.budget = this.quantity;
      this._budgetService.rest = this.quantity;
      this.router.navigate(['/expenses']);
    }
    this.incorrectQuanity = true;
  }
}
