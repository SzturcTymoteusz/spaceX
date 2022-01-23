import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GetLaunchResolver } from './get-launch.resolver';
import { Launch } from '../../../listing/models/launch';

@Injectable({
  providedIn: 'root',
  useClass: GetLaunchResolver,
})
export abstract class GetLaunch {
  abstract resolve(route: ActivatedRouteSnapshot): Observable<Launch | null>;
}
