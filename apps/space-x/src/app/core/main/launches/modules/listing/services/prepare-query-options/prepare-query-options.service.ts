import { Injectable } from '@angular/core';
import { PrepareQueryOptions } from './prepare-query-options';
import { QueryOptionDto } from '../../models/query-option-dto';
import { PaginationSettings } from '../pagination-settings/pagination-settings';
import { SortSettings } from '../sort-settings/sort-settings';
import { SearchSettings } from '../search-settings/search-settings';

@Injectable()
export class PrepareQueryOptionsService implements PrepareQueryOptions {
  constructor(private pagination: PaginationSettings, private sortSettings: SortSettings, private searchSettings: SearchSettings) {}

  prepare(): QueryOptionDto {
    return {
      query: this.searchSettings.setting,
      options: {
        limit: this.pagination.settings.amountItemsOnPage,
        page: this.pagination.settings.pageNumber,
        sort: {
          [this.sortSettings.settings.sortColumnIndex]: this.sortSettings.settings.sortDirection,
        },
      },
    };
  }
}
