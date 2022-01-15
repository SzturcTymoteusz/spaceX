import { Component } from '@angular/core';
import { Login } from '../../lib/services/login/login';

@Component({
  selector: 'space-x-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public loginService: Login) {}
}
