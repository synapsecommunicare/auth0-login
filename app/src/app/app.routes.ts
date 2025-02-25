import { Routes } from '@angular/router';
import { AppBaseComponent } from './app-base/app-base.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: AppBaseComponent },
  { path: '**', redirectTo: 'login' },
];