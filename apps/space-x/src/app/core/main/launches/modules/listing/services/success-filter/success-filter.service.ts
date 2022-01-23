import { Injectable } from '@angular/core';
import { SuccessFilter } from './success-filter';

@Injectable()
export class SuccessFilterService implements SuccessFilter {
  filter(success: boolean | null): string {
    if (success === null) {
      return '';
    }

    return success ? 'done' : 'clear';
  }
}
