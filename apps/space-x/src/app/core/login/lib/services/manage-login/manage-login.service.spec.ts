import { TestBed } from '@angular/core/testing';

import { ManageLoginService } from './manage-login.service';
import { LoginForm } from '../login-form/login-form';
import { Authentication } from '../../../../../commanders/auth/authentication/authentication';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of, throwError } from 'rxjs';

describe('LoginService', () => {
  let service: ManageLoginService;

  const passwordControl = new FormControl(null, Validators.required);
  const dummyForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: passwordControl,
  });
  let loginResponse = of({});

  let loginFormMock: {
    form: jest.Mock;
    password: jest.Mock;
    email: jest.Mock;
  };
  let authenticationMock: {
    login: jest.Mock;
  };

  beforeEach(() => {
    loginFormMock = {
      form: jest.fn(),
      password: jest.fn(),
      email: jest.fn(),
    };
    Object.defineProperty(loginFormMock, 'form', {
      get: jest.fn().mockImplementation(() => dummyForm),
      configurable: true,
    });
    Object.defineProperty(loginFormMock, 'password', {
      get: jest.fn().mockImplementation(() => passwordControl),
      configurable: true,
    });
    Object.defineProperty(loginFormMock, 'email', {
      get: jest.fn().mockImplementation(() => dummyForm.get('email')),
      configurable: true,
    });
    authenticationMock = {
      login: jest.fn().mockImplementation(() => loginResponse),
    };

    TestBed.configureTestingModule({
      providers: [
        ManageLoginService,
        { provide: LoginForm, useValue: loginFormMock },
        { provide: Authentication, useValue: authenticationMock },
      ],
    });
    service = TestBed.inject(ManageLoginService);
  });

  describe('login', () => {
    it('should update password value and validity', () => {
      jest.spyOn(passwordControl, 'updateValueAndValidity');
      service.login();
      expect(passwordControl.updateValueAndValidity).toHaveBeenCalled();
    });

    describe('form is invalid', () => {
      it('should mark form as touched', () => {
        jest.spyOn(dummyForm, 'markAllAsTouched');
        service.login();
        expect(dummyForm.markAllAsTouched).toHaveBeenCalled();
      });
    });

    describe('form is valid', () => {
      it('should try to login in', () => {
        dummyForm.setValue({
          email: 'asdf@adf',
          password: 'password',
        });
        service.login();
        expect(authenticationMock.login).toHaveBeenCalledWith('asdf@adf', 'password');
      });
      it('if authentication failed should set error', () => {
        jest.spyOn(passwordControl, 'setErrors');
        dummyForm.setValue({
          email: 'asdf@adf',
          password: 'password',
        });
        loginResponse = throwError(() => {
          return { status: 401 };
        });
        service.login();
        expect(passwordControl.setErrors).toHaveBeenCalledWith({ invalidCredentials: true });
      });
    });
  });
});
