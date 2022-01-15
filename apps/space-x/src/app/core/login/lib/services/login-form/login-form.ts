import { Injectable } from '@angular/core';
import { LoginFormService } from './login-form.service';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
  useClass: LoginFormService,
})
export abstract class LoginForm {
  abstract get form(): FormGroup;

  abstract get email(): FormControl;

  abstract get password(): FormControl;
}
