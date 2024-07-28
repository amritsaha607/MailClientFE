import { Component } from '@angular/core';
import { FormLoginComponent } from '../../components/form-login/form-login.component';
import { FormSignupComponent } from '../../components/form-signup/form-signup.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormSignupComponent, FormLoginComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {}
