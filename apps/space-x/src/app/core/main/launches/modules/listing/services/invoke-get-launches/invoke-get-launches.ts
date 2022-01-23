import { Injectable } from '@angular/core';
import { InvokeGetLaunchesService } from './invoke-get-launches.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  useClass: InvokeGetLaunchesService,
})
export abstract class InvokeGetLaunches {
  abstract invokeObservable: Observable<undefined>;

  abstract invoke(): void;
}
