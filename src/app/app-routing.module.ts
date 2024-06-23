import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

import { DiscountCalculatorComponent } from './Pregunta1/discount-calculator.component';
import { AuthGuard } from './auth.guard';
import { TyreCalculatorComponent } from './Pregunta2/tyre-calculator.component';
import { Pregunta3Component } from './pregunta3/pregunta3.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
  { path: 'Pregunta1', component: DiscountCalculatorComponent, canActivate: [AuthGuard] },
  { path: 'Pregunta2', component: TyreCalculatorComponent, canActivate: [AuthGuard] },
  { path: 'pregunta3', component: Pregunta3Component, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  { }
