import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { LoginForm } from '../../lib/services/login-form/login-form';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  const emailControl = new FormControl(null, [Validators.required, Validators.email]);
  const passwordControl = new FormControl(null, [Validators.required]);
  const dummyForm = new FormGroup({
    email: emailControl,
    password: passwordControl,
  });

  let loginFormMock: {
    form: jest.Mock;
    email: jest.Mock;
    password: jest.Mock;
  };

  beforeEach(async () => {
    loginFormMock = {
      form: jest.fn(),
      email: jest.fn(),
      password: jest.fn(),
    };
    Object.defineProperty(loginFormMock, 'form', {
      get: jest.fn().mockImplementation(() => dummyForm),
      configurable: true,
    });
    Object.defineProperty(loginFormMock, 'email', {
      get: jest.fn().mockImplementation(() => emailControl),
      configurable: true,
    });
    Object.defineProperty(loginFormMock, 'password', {
      get: jest.fn().mockImplementation(() => passwordControl),
      configurable: true,
    });

    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      providers: [{ provide: LoginForm, useValue: loginFormMock }],
      imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('#UI', () => {
    describe('#email', () => {
      it('should be in DOM', () => {
        const emailControl = fixture.debugElement.query(By.css('#email-control'));
        expect(emailControl).toBeTruthy();
      });
      it('should have label', () => {
        const emailLabel = fixture.debugElement.query(By.css('#email-label'));
        expect(emailLabel).toBeTruthy();
        expect(emailLabel.nativeElement.textContent).toEqual('Email');
      });
      it('should have input', () => {
        const emailInput = fixture.debugElement.query(By.css('#email-input')).nativeElement as HTMLInputElement;
        expect(emailInput).toBeTruthy();
      });
      it('should show required error', () => {
        emailControl.markAllAsTouched();
        emailControl.markAsDirty();
        emailControl.setValue(null);
        fixture.detectChanges();
        const requiredError = fixture.debugElement.query(By.css('#email-control mat-error'));
        expect(requiredError).toBeTruthy();
        expect(requiredError.nativeElement.textContent).toEqual('Email is required');
      });
      it('should show email error', () => {
        emailControl.markAllAsTouched();
        emailControl.markAsDirty();
        emailControl.setValue('dssa');
        fixture.detectChanges();
        const requiredError = fixture.debugElement.query(By.css('#email-control mat-error'));
        expect(requiredError).toBeTruthy();
        expect(requiredError.nativeElement.textContent.trim()).toEqual('Email is invalid');
      });
    });

    describe('#password', () => {
      it('should be in DOM', () => {
        const passwordControl = fixture.debugElement.query(By.css('#password-control'));
        expect(passwordControl).toBeTruthy();
      });
      it('should have label', () => {
        const passwordLabel = fixture.debugElement.query(By.css('#password-label'));
        expect(passwordLabel).toBeTruthy();
        expect(passwordLabel.nativeElement.textContent).toEqual('Password');
      });
      it('should have input', () => {
        const passwordInput = fixture.debugElement.query(By.css('#password-input')).nativeElement as HTMLInputElement;
        expect(passwordInput).toBeTruthy();
      });
      it('should show required error', () => {
        passwordControl.markAllAsTouched();
        passwordControl.markAsDirty();
        passwordControl.setValue(null);
        fixture.detectChanges();
        const requiredError = fixture.debugElement.query(By.css('#password-control mat-error'));
        expect(requiredError).toBeTruthy();
        expect(requiredError.nativeElement.textContent).toEqual('Password is required');
      });
      it('should show required error', () => {
        passwordControl.markAllAsTouched();
        passwordControl.markAsDirty();
        passwordControl.setValue('password');
        passwordControl.setErrors({ invalidCredentials: true });
        fixture.detectChanges();
        const invalidCredentialsError = fixture.debugElement.query(By.css('#password-control mat-error'));
        expect(invalidCredentialsError).toBeTruthy();
        expect(invalidCredentialsError.nativeElement.textContent.trim()).toEqual(
          `The email or the password that you've entered is incorrect`
        );
      });
    });
  });
});
