import { Injectable } from '@angular/core';
import { SortSettingsService } from './sort-settings.service';
import { SortSettingsModel } from '../../models/sort-settings';

@Injectable({
  providedIn: 'root',
  useClass: SortSettingsService,
})
export abstract class SortSettings {
  abstract get settings(): SortSettingsModel;

  abstract set settings(sort: SortSettingsModel);

  abstract reset(): void;
}
