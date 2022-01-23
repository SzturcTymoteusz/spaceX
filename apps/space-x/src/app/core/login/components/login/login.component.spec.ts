import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ManageLogin } from '../../lib/services/manage-login/manage-login';
import { LoginForm } from '../../lib/services/login-form/login-form';
import { MatCardModule } from '@angular/material/card';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'space-x-form',
  template: '',
})
export class FormComponent {}

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;

  let manageLoginMock: {
    login: jest.Mock;
  };
  let loginFormMock: {
    reset: jest.Mock;
  };

  beforeEach(async () => {
    manageLoginMock = {
      login: jest.fn(),
    };
    loginFormMock = {
      reset: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [LoginComponent, FormComponent],
      providers: [
        { provide: ManageLogin, useValue: manageLoginMock },
        { provide: LoginForm, useValue: loginFormMock },
      ],
      imports: [MatCardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
  });

  describe('#ngOnInit', () => {
    it('should reset form', () => {
      expect(loginFormMock.reset).toHaveBeenCalled();
    });
  });

  describe('#UI', () => {
    it('should have title', () => {
      const title = fixture.debugElement.query(By.css('.title'));
      expect(title).toBeTruthy();
      expect(title.nativeElement.textContent).toEqual('Log in');
    });
    it('should have form', () => {
      const form = fixture.debugElement.query(By.css('space-x-form'));
      expect(form).toBeTruthy();
    });

    describe('login button', () => {
      it('should have button', () => {
        const loginButton = fixture.debugElement.query(By.css('.login-button'));
        expect(loginButton).toBeTruthy();
        expect(loginButton.nativeElement.textContent).toEqual('Login');
      });
      it('after click login button should try to login', () => {
        const loginButton = fixture.debugElement.query(By.css('.login-button'));
        loginButton.nativeElement.click();
        expect(manageLoginMock.login).toHaveBeenCalled();
      });
    });
  });
});
