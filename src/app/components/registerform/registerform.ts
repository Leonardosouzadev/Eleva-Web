import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registerform.html',
  styleUrl: './registerform.scss',
})
export class Registerform {

  email = '';
  password = '';
  name = '';

  constructor(private auth: AuthService, private router: Router) {}

  submitRegister() {
    this.auth.register(this.name, this.email, this.password).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
