import { Injectable } from '@angular/core';
import { InvokeGetLaunches } from './invoke-get-launches';
import { Subject } from 'rxjs';

@Injectable()
export class InvokeGetLaunchesService implements InvokeGetLaunches {
  private invokeSubject: Subject<undefined> = new Subject<undefined>();
  invokeObservable = this.invokeSubject.asObservable();

  invoke() {
    this.invokeSubject.next(undefined);
  }
}
