import { TestBed } from '@angular/core/testing';

import { LoginFormService } from './login-form.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

describe('LoginFormService', () => {
  let service: LoginFormService;

  const formMock = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginFormService],
    });
    service = TestBed.inject(LoginFormService);
  });

  describe('#form', () => {
    it('should return form', () => {
      expect(service.form.value).toEqual(formMock.value);
    });
  });

  describe('#email', () => {
    it('should return email control', () => {
      expect(service.email.value).toEqual(formMock.get('email')?.value);
    });
  });

  describe('#password', () => {
    it('should return password control', () => {
      expect(service.password.value).toEqual(formMock.get('password')?.value);
    });
  });

  describe('#reset', () => {
    it('should return form initial value', () => {
      service.form.setValue({
        email: 'asdf@asdfg',
        password: 'password',
      });
      service.reset();
      expect(service.form.value).toEqual({
        email: null,
        password: null,
      });
    });
  });
});
