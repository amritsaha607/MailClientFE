import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormItem } from '../../../types';
import { FormItemComponent } from '../form-item/form-item.component';

@Component({
  selector: 'app-form-signup',
  standalone: true,
  imports: [FormItemComponent, CommonModule],
  templateUrl: './form-signup.component.html',
  styleUrl: './form-signup.component.scss',
})
export class FormSignupComponent {
  signupFormItems!: FormItem[];
  loginFormItems!: FormItem[];

  constructor() {
    this.signupFormItems = [
      {
        id: 'name',
        name: 'name',
        title: 'Name',
        placeholder: 'Enter name',
        inputType: 'text',
      },
      {
        id: 'email',
        name: 'email',
        title: 'Email',
        placeholder: 'Create email ID',
        inputType: 'email',
      },
      {
        id: 'password',
        name: 'password',
        title: 'Password',
        placeholder: 'Create a password',
        inputType: 'password',
      },
    ];

    this.loginFormItems = [
      {
        id: 'login_email',
        name: 'login_email',
        title: 'Email',
        placeholder: 'Enter email ID',
        inputType: 'email',
      },
      {
        id: 'login_password',
        name: 'login_password',
        title: 'Password',
        placeholder: 'Enter password',
        inputType: 'password',
      },
    ];
  }
}
