import { Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: AuthComponent,
  },
];
