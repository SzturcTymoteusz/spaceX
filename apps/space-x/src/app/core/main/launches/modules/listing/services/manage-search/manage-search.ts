import { Injectable } from '@angular/core';
import { ManageSearchService } from './manage-search.service';

@Injectable({
  providedIn: 'root',
  useClass: ManageSearchService,
})
export abstract class ManageSearch {
  abstract manage(): void;
}
