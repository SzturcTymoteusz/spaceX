import { Injectable } from '@angular/core';
import { SuccessFilterService } from './success-filter.service';

@Injectable({
  providedIn: 'root',
  useClass: SuccessFilterService,
})
export abstract class SuccessFilter {
  abstract filter(success: boolean | null): string;
}
