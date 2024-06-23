import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-discount-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './discount-calculator.component.html',
  styleUrl: './discount-calculator.component.css'
})
export class DiscountCalculatorComponent {
  unitPrice: number = 0;
  quantity: number = 0;
  totalPrice: number | null = null;

  calculateTotal() {
    let discount = 0;

    if (this.quantity > 20) {
      discount = 0.10;
    } else if (this.quantity > 10) {
      discount = 0.05;
    }

    const subtotal = this.unitPrice * this.quantity;
    this.totalPrice = subtotal - (subtotal * discount);
  }
}
