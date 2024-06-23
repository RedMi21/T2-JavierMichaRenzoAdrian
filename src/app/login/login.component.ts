import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'apellido' && this.password === '12345') {
      sessionStorage.setItem('usuario', this.username);
      this.router.navigate(['/menu']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
