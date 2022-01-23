import { Injectable } from '@angular/core';
import { ManageGetLaunchesService } from './manage-get-launches.service';
import { Observable } from 'rxjs';
import { Row } from '../../models/row';

@Injectable({
  providedIn: 'root',
  useClass: ManageGetLaunchesService,
})
export abstract class ManageGetLaunches {
  abstract isLoading: Observable<boolean>;

  abstract manage(): Observable<Row>;
}
