import { Injectable } from '@angular/core';
import { ManageGetLaunches } from './manage-get-launches';
import { GetLaunchesFromApi } from '../get-launches-from-api/get-launches-from-api';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Row } from '../../models/row';

@Injectable()
export class ManageGetLaunchesService implements ManageGetLaunches {
  private _isLoading = new BehaviorSubject<boolean>(false);
  isLoading = this._isLoading.asObservable();

  constructor(private getLaunchesFromApi: GetLaunchesFromApi) {}

  manage(): Observable<Row> {
    this._isLoading.next(true);
    return this.getLaunchesFromApi.get().pipe(
      map((value) => {
        this._isLoading.next(false);
        return value;
      })
    );
  }
}
