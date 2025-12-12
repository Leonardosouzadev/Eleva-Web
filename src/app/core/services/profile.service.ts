import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProfileService {

  private api = 'http://localhost:8080/profile';

  constructor(private http: HttpClient) {}

  getById(id: string): Observable<any> {
  const token = localStorage.getItem('token');
  return this.http.get(`${this.api}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

}