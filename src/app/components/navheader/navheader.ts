import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navheader',
  imports: [],
  templateUrl: './navheader.html',
  styleUrl: './navheader.scss',
})
export class Navheader {
  
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  navigateHome() {
    this.router.navigate(['/']);
  }

  navigateTasks() {
    this.router.navigate(['/tasks']);
  }
  
  navigateProfile() {
    this.router.navigate(['/profile']);
  }
}
