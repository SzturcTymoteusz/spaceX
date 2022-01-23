import { Injectable } from '@angular/core';
import { SortSettingsModel } from '../../models/sort-settings';
import { SortDirection } from '../../types/sort-direction';
import { SortSettings } from './sort-settings';

@Injectable()
export class SortSettingsService implements SortSettings {
  private _settings: SortSettingsModel = {
    sortColumnIndex: 'flight_number',
    sortDirection: SortDirection.desc,
  };

  get settings(): SortSettingsModel {
    return this._settings;
  }

  set settings(settings: SortSettingsModel) {
    this._settings = settings;
  }

  reset() {
    this._settings = {
      sortColumnIndex: 'flight_number',
      sortDirection: SortDirection.desc,
    };
  }
}
