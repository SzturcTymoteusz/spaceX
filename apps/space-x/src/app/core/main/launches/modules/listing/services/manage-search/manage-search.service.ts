import { Injectable } from '@angular/core';
import { ManageSearch } from './manage-search';
import { SearchForm } from '../search-form/search-form';
import { SearchSettings } from '../search-settings/search-settings';
import { InvokeGetLaunches } from '../invoke-get-launches/invoke-get-launches';

@Injectable()
export class ManageSearchService implements ManageSearch {
  constructor(private searchForm: SearchForm, private searchSettings: SearchSettings, private invokeGetLaunches: InvokeGetLaunches) {}

  manage() {
    if (this.searchForm.form.valid) {
      const newSettings: Record<string, string | number> = {};
      const flightNumber = this.searchForm.flightNumber.value;
      const name = this.searchForm.name.value;
      const success = this.searchForm.success.value;

      if (flightNumber !== null) {
        newSettings['flight_number'] = flightNumber;
      }

      if (name !== null && name !== '') {
        newSettings['name'] = name;
      }

      if (success !== null) {
        newSettings['success'] = success;
      }

      this.searchSettings.setting = newSettings;
      this.invokeGetLaunches.invoke();
    } else {
      this.searchForm.form.markAllAsTouched();
    }
  }
}
