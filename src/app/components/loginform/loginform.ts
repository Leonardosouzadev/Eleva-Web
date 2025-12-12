import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './loginform.html',
  styleUrl: './loginform.scss',
})
export class Loginform {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) { }

  submitLogin() {
    this.auth.login(this.email, this.password).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
