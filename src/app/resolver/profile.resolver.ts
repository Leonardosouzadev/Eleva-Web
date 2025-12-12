// src/app/core/resolvers/profile.resolver.ts
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProfileService } from '../core/services/profile.service';
import { AuthService } from '../core/services/auth.service';

@Injectable({ providedIn: 'root' })
export class ProfileResolver implements Resolve<any> {

  constructor(
    private profileService: ProfileService,
    private auth: AuthService
  ) {}

  resolve(): Observable<any> {
    const user = this.auth.getUserData();

    if (!user?.sub) {
      // Se o usuário não estiver logado, retorna erro
      return throwError(() => new Error('Usuário não autenticado'));
    }

    // Retorna observable do profile
    return this.profileService.getById(user.sub)
      .pipe(
        catchError(err => {
          console.error('Erro ao carregar perfil no resolver:', err);
          return throwError(() => err);
        })
      );
  }
}
