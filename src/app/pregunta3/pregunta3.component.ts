import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-pregunta3',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css'
})
export class Pregunta3Component {
  unitPrice: number = 0;
  quantity: number = 0;
  totalPrice: number | null = null;

  calculateTotal() {
    const subtotal = this.unitPrice * this.quantity;
    const discount = subtotal > 200 ? 0.20 : 0;
    this.totalPrice = subtotal - (subtotal * discount);
  }
}
