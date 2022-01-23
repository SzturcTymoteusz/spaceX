import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { GetRoadsterInfo } from './get-roadster-info';
import { RoadsterInfo } from '../../models/roadster-info';
import { GetRoadsterInfoFromApi } from '../../services/get-roadster-info-from-api/get-roadster-info-from-api';
import { Router } from '@angular/router';

@Injectable()
export class GetRoadsterInfoResolver implements GetRoadsterInfo {
  constructor(private getRoadsterInfoFromApi: GetRoadsterInfoFromApi, private router: Router) {}

  resolve(): Observable<RoadsterInfo | null> {
    return this.getRoadsterInfoFromApi.get().pipe(
      catchError((err) => {
        this.router.navigate(['launches']).then();
        return throwError(err);
      })
    );
  }
}
