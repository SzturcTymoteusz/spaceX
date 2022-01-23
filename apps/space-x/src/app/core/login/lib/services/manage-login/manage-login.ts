import { Injectable } from '@angular/core';
import { ManageLoginService } from './manage-login.service';

@Injectable({
  providedIn: 'root',
  useClass: ManageLoginService,
})
export abstract class ManageLogin {
  abstract login(): void;
}
