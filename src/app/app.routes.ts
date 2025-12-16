import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { AuthGuard } from './core/guards/auth.guard';
import { Profile } from './pages/profile/profile';
import { ProfileResolver } from './resolver/profile.resolver';
import { Tasks } from './pages/tasks/tasks';

export const routes: Routes = [
  { path: 'login', component: Login },

  { path: 'profile', component: Profile, canActivate: [AuthGuard], resolve: { profile: ProfileResolver } },

  { path: 'tasks', component: Tasks, canActivate: [AuthGuard] },

  { path: '', component: Home, canActivate: [AuthGuard] },

  { path: '**', redirectTo: '' }
];
