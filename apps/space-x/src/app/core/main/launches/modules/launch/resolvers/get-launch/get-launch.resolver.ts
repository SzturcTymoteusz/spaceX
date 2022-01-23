import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { GetLaunchFromApi } from '../../services/get-launch-from-api/get-launch-from-api';
import { Launch } from '../../../listing/models/launch';
import { GetLaunch } from './get-launch';

@Injectable()
export class GetLaunchResolver implements GetLaunch {
  constructor(private router: Router, private getLaunchFromApi: GetLaunchFromApi) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Launch> {
    const launchId = route.params['id'] as string;
    return this.getLaunchFromApi.get(launchId).pipe(
      catchError((err) => {
        this.router.navigate(['launches']).then();
        return throwError(err);
      })
    );
  }
}
