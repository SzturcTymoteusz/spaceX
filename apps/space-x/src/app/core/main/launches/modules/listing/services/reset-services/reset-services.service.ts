import { Injectable } from '@angular/core';
import { ResetServices } from './reset-services';
import { PaginationSettings } from '../pagination-settings/pagination-settings';
import { SortSettings } from '../sort-settings/sort-settings';
import { SearchForm } from '../search-form/search-form';
import { SearchSettings } from '../search-settings/search-settings';
import { IsOpenSearch } from '../is-open-search/is-open-search';

@Injectable()
export class ResetServicesService implements ResetServices {
  constructor(
    private pagination: PaginationSettings,
    private sort: SortSettings,
    private searchForm: SearchForm,
    private searchSettings: SearchSettings,
    private isOpenSearch: IsOpenSearch
  ) {}

  reset() {
    this.pagination.reset();
    this.sort.reset();
    this.searchSettings.reset();
    this.searchForm.reset();
    this.isOpenSearch.reset();
  }
}
