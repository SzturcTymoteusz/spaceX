import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
  useClass: LoginService,
})
export abstract class Login {
  abstract login(): void;
}
