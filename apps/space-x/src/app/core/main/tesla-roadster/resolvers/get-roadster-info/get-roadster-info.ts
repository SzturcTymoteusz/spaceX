import { Injectable } from '@angular/core';
import { GetRoadsterInfoResolver } from './get-roadster-info.resolver';
import { Observable } from 'rxjs';
import { RoadsterInfo } from '../../models/roadster-info';

@Injectable({
  providedIn: 'root',
  useClass: GetRoadsterInfoResolver,
})
export abstract class GetRoadsterInfo {
  abstract resolve(): Observable<RoadsterInfo | null>;
}
