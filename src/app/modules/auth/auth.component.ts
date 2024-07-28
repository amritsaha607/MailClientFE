import { CommonModule } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormItem, User } from '../../../types';
import { FormItemComponent } from '../../components/form-item/form-item.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormItemComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  signupFormItems!: FormItem[];
  loginFormItems!: FormItem[];
  activeForm: String = 'login';

  signupForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', Validators.required],
    dob: ['', Validators.required],
  });
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', Validators.required],
  });

  user: User = {
    name: '',
    email: '',
    password: '',
    dob: '',
  };

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
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
      {
        id: 'dob',
        name: 'dob',
        title: 'Date of Birth',
        placeholder: '',
        inputType: 'date',
      },
    ];

    this.loginFormItems = [
      {
        id: 'email',
        name: 'email',
        title: 'Email',
        placeholder: 'Enter email ID',
        inputType: 'email',
      },
      {
        id: 'password',
        name: 'password',
        title: 'Password',
        placeholder: 'Enter password',
        inputType: 'password',
      },
    ];
  }

  toggleActiveForm() {
    if (this.activeForm == 'login') {
      this.activeForm = 'signup';
    } else {
      this.activeForm = 'login';
    }
  }

  setUserValues(name: string, email: string, password: string, dob: string) {
    this.user.name = name;
    this.user.email = email;
    this.user.password = password;
    this.user.dob = dob;
  }

  createUser() {
    const { name, email, password, dob } = this.signupForm.value;
    this.setUserValues(name ?? '', email ?? '', password ?? '', dob ?? '');
    this.authService
      .createUser(this.user)
      .subscribe((response: HttpResponse<any>) => {
        console.log(response.status, response);
      });
  }

  loginUser() {
    const { email, password } = this.loginForm.value;
    this.authService
      .loginUser(email ?? '', password ?? '')
      .subscribe((response) => {
        console.log(response.status, response);
      });
  }
}
