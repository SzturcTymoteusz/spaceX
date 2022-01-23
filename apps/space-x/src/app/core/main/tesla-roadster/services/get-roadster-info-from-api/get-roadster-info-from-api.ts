import { Injectable } from '@angular/core';
import { GetRoadsterInfoFromApiService } from './get-roadster-info-from-api.service';
import { Observable } from 'rxjs';
import { RoadsterInfo } from '../../models/roadster-info';

@Injectable({
  providedIn: 'root',
  useClass: GetRoadsterInfoFromApiService,
})
export abstract class GetRoadsterInfoFromApi {
  abstract get(): Observable<RoadsterInfo>;
}
