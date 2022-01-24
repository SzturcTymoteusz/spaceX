import { Component, Input } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { SortDirection } from '../../types/sort-direction';
import { SortSettings } from '../../services/sort-settings/sort-settings';
import { InvokeGetLaunches } from '../../services/invoke-get-launches/invoke-get-launches';
import { ManageGetLaunches } from '../../services/manage-get-launches/manage-get-launches';
import { Launch } from '../../models/launch';
import { SuccessFilter } from '../../services/success-filter/success-filter';
import { IsOpenSearch } from '../../services/is-open-search/is-open-search';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'space-x-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() dataSource!: Launch[];

  displayedColumns: string[] = ['flight_number', 'name', 'success', 'id', 'actions'];

  constructor(
    public sortSettingsService: SortSettings,
    private invokeGetLaunches: InvokeGetLaunches,
    public manageGetLaunches: ManageGetLaunches,
    public successFilter: SuccessFilter,
    public isOpenSearch: IsOpenSearch,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  setNewSortSettingsAndInvokeGetLaunches(newSortSettings: Sort) {
    this.sortSettingsService.settings = {
      sortColumnIndex: newSortSettings.active,
      sortDirection: newSortSettings.direction as SortDirection,
    };
    this.invokeGetLaunches.invoke();
  }

  navigateToDetails(element: Launch) {
    this.router.navigate([element.id], { relativeTo: this.route });
  }
}
