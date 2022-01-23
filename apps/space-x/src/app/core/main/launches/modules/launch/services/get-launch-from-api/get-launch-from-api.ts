import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Launch } from '../../../listing/models/launch';
import { GetLaunchFromApiService } from './get-launch-from-api.service';

@Injectable({
  providedIn: 'root',
  useClass: GetLaunchFromApiService,
})
export abstract class GetLaunchFromApi {
  abstract get(id: string): Observable<Launch>;
}
