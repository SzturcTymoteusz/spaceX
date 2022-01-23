import { Injectable } from '@angular/core';
import { GetLaunchFromApi } from './get-launch-from-api';
import { HttpClient } from '@angular/common/http';
import { Launch } from '../../../listing/models/launch';
import { Observable } from 'rxjs';

@Injectable()
export class GetLaunchFromApiService implements GetLaunchFromApi {
  constructor(private http: HttpClient) {}

  get(id: string): Observable<Launch> {
    const url = `https://api.spacexdata.com/v4/launches/${id}`;
    return this.http.get<Launch>(url);
  }
}
