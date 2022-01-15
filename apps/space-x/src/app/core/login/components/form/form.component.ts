import { Component } from '@angular/core';
import { LoginForm } from '../../lib/services/login-form/login-form';

@Component({
  selector: 'space-x-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  constructor(public loginForm: LoginForm) {}
}
