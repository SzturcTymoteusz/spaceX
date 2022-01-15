import { Injectable } from '@angular/core';
import { LoginForm } from './login-form';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class LoginFormService implements LoginForm {
  constructor() {
    this.prepareForm();
  }

  private _form!: FormGroup;

  get form(): FormGroup {
    return this._form;
  }

  get email(): FormControl {
    return this._form.get('email') as FormControl;
  }

  get password(): FormControl {
    return this._form.get('password') as FormControl;
  }

  private prepareForm() {
    this._form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }
}
