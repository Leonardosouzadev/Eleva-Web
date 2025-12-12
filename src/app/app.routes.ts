import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { AuthGuard } from './core/guards/auth.guard';
import { Profile } from './pages/profile/profile';
import { ProfileResolver } from './resolver/profile.resolver';

export const routes: Routes = [
  { path: 'login', component: Login },

  { path: 'profile', component: Profile, canActivate: [AuthGuard], resolve: { profile: ProfileResolver } },

  { path: '', component: Home, canActivate: [AuthGuard] },

  { path: '**', redirectTo: '' }
];
