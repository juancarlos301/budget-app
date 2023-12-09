import { Routes } from '@angular/router';
import { InputBudgetComponent, BudgetComponent } from './components';

export const routes: Routes = [
  { path: '', redirectTo: '/get-into-budget', pathMatch: 'full' },
  { path: 'get-into-budget', component: InputBudgetComponent },
  { path: 'expenses', component: BudgetComponent },
  { path: '**', redirectTo: '/get-into-budget', pathMatch: 'full' },
];
