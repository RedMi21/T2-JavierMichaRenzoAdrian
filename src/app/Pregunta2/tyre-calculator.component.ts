import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-tyre-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './tyre-calculator.component.html',
  styleUrl: './tyre-calculator.component.css'
})
export class TyreCalculatorComponent {
  quantity: number = 0;
  totalPrice: number | null = null;

  calculateTotal() {
    const pricePerTyre = this.quantity >= 5 ? 700 : 800;
    this.totalPrice = this.quantity * pricePerTyre;
  }
}
