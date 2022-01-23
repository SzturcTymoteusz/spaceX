import { Injectable } from '@angular/core';
import { GetLaunchesFromApi } from './get-launches-from-api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrepareQueryOptions } from '../prepare-query-options/prepare-query-options';
import { Row } from '../../models/row';

@Injectable()
export class GetLaunchesFromApiService implements GetLaunchesFromApi {
  constructor(private http: HttpClient, private prepareQueryOptions: PrepareQueryOptions) {}

  get(): Observable<Row> {
    return this.http.post<Row>('https://api.spacexdata.com/v4/launches/query', this.prepareQueryOptions.prepare());
  }
}
