import { Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PaginationSettings } from '../../services/pagination-settings/pagination-settings';
import { InvokeGetLaunches } from '../../services/invoke-get-launches/invoke-get-launches';

@Component({
  selector: 'space-x-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() numberAllLaunch!: number;

  constructor(public pagination: PaginationSettings, private invokeGetLaunches: InvokeGetLaunches) {}

  setNewPaginationAndInvokeGetLaunches(newPaginationSettings: PageEvent) {
    this.pagination.settings = {
      amountItemsOnPage: newPaginationSettings.pageSize,
      pageNumber: newPaginationSettings.pageIndex + 1,
    };
    this.invokeGetLaunches.invoke();
  }
}
