import { Injectable } from '@angular/core';
import { GetRoadsterInfoFromApi } from './get-roadster-info-from-api';
import { HttpClient } from '@angular/common/http';
import { RoadsterInfo } from '../../models/roadster-info';
import { Observable } from 'rxjs';

@Injectable()
export class GetRoadsterInfoFromApiService implements GetRoadsterInfoFromApi {
  constructor(private http: HttpClient) {}

  get(): Observable<RoadsterInfo> {
    return this.http.get<RoadsterInfo>('https://api.spacexdata.com/v4/roadster');
  }
}
