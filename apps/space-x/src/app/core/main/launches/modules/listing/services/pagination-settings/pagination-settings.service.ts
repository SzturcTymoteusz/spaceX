import { Injectable } from '@angular/core';
import { Pagination } from '../../models/pagination';
import { PaginationSettings } from './pagination-settings';

@Injectable()
export class PaginationSettingsService implements PaginationSettings {
  defaultPageSizeOptions = [5, 10, 15, 20];

  private _settings: Pagination = {
    pageNumber: 0,
    amountItemsOnPage: 10,
  };

  get settings(): Pagination {
    return this._settings;
  }

  set settings(settings: Pagination) {
    this._settings = settings;
  }

  reset() {
    this._settings = {
      pageNumber: 0,
      amountItemsOnPage: 10,
    };
  }
}
