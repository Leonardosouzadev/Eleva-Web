import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private api = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<{ token: string }>(`${this.api}/login`, { email, password })
      .pipe(
        tap(res => {
          localStorage.setItem('token', res.token);
        })
      );
  }

  register(name: string, email: string, password: string) {
    return this.http.post(`${this.api}/register`, { name, email, password })
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLogged() {
    return !!localStorage.getItem('token');
  }

  getUserData() {
    const token = this.getToken();
    if (!token) return null;
    return jwtDecode(token);
  }

  getRole() {
    const data: any = this.getUserData();
    return data?.role || null;
  }
}
