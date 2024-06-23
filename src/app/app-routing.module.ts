import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { DiscountCalculatorComponent } from './discount-calculator/discount-calculator.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
  { path: 'question1', component: Question1Component, canActivate: [AuthGuard] },
  { path: 'question2', component: Question2Component, canActivate: [AuthGuard] },
  { path: 'question3', component: Question3Component, canActivate: [AuthGuard] },
  { path: 'discount-calculator', component: DiscountCalculatorComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  { }
