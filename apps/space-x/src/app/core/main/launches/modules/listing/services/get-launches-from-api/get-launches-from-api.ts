import { Injectable } from '@angular/core';
import { GetLaunchesFromApiService } from './get-launches-from-api.service';
import { Observable } from 'rxjs';
import { Row } from '../../models/row';

@Injectable({
  providedIn: 'root',
  useClass: GetLaunchesFromApiService,
})
export abstract class GetLaunchesFromApi {
  abstract get(): Observable<Row>;
}
