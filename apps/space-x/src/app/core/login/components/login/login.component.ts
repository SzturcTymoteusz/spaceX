import { Component, OnInit } from '@angular/core';
import { ManageLogin } from '../../lib/services/manage-login/manage-login';
import { LoginForm } from '../../lib/services/login-form/login-form';

@Component({
  selector: 'space-x-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public manageLogin: ManageLogin, private loginForm: LoginForm) {}

  ngOnInit() {
    this.loginForm.reset();
  }
}
