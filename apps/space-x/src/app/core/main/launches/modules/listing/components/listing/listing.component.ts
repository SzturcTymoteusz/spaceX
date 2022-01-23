import { Component, OnDestroy, OnInit } from '@angular/core';
import { ManageGetLaunches } from '../../services/manage-get-launches/manage-get-launches';
import { Launch } from '../../models/launch';
import { SuccessFilter } from '../../services/success-filter/success-filter';
import { ActivatedRoute, Router } from '@angular/router';
import { InvokeGetLaunches } from '../../services/invoke-get-launches/invoke-get-launches';
import { Subject, takeUntil } from 'rxjs';
import { PaginationSettings } from '../../services/pagination-settings/pagination-settings';
import { PageEvent } from '@angular/material/paginator';
import { ResetServices } from '../../services/reset-services/reset-services';
import { Sort } from '@angular/material/sort';
import { SortSettings } from '../../services/sort-settings/sort-settings';
import { SortDirection } from '../../types/sort-direction';
import { IsOpenSearch } from '../../services/is-open-search/is-open-search';
import { SearchForm } from '../../services/search-form/search-form';
import { ManageSearch } from '../../services/manage-search/manage-search';

@Component({
  selector: 'space-x-launches',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['flight_number', 'name', 'success', 'id', 'actions'];
  dataSource: Launch[] = [];
  numberAllLaunch!: number;
  private destroy = new Subject();

  constructor(
    public manageGetLaunches: ManageGetLaunches,
    public successFilter: SuccessFilter,
    private router: Router,
    private route: ActivatedRoute,
    private invokeGetLaunches: InvokeGetLaunches,
    public pagination: PaginationSettings,
    public sortSettingsService: SortSettings,
    private resetServices: ResetServices,
    public isOpenSearch: IsOpenSearch,
    public searchForm: SearchForm,
    public manageSearch: ManageSearch
  ) {}

  ngOnInit(): void {
    this.resetServices.reset();
    this.getLaunches();
    this.invokeGetLaunches.invokeObservable.pipe(takeUntil(this.destroy)).subscribe(() => {
      this.getLaunches();
    });
  }

  navigateToDetails(element: Launch) {
    this.router.navigate([element.id], { relativeTo: this.route });
  }

  goBack() {
    this.router.navigate(['']);
  }

  setNewPaginationAndInvokeGetLaunches(newPaginationSettings: PageEvent) {
    this.pagination.settings = {
      amountItemsOnPage: newPaginationSettings.pageSize,
      pageNumber: newPaginationSettings.pageIndex + 1,
    };
    this.invokeGetLaunches.invoke();
  }

  setNewSortSettingsAndInvokeGetLaunches(newSortSettings: Sort) {
    this.sortSettingsService.settings = {
      sortColumnIndex: newSortSettings.active,
      sortDirection: newSortSettings.direction as SortDirection,
    };
    this.invokeGetLaunches.invoke();
  }

  ngOnDestroy() {
    this.destroy.next(undefined);
    this.destroy.complete();
  }

  private getLaunches() {
    this.manageGetLaunches.manage().subscribe((row) => {
      this.dataSource = row.docs;
      this.numberAllLaunch = row.totalDocs;
    });
  }
}
