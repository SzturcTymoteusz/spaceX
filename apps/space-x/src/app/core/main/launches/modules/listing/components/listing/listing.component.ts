import { Component, OnDestroy, OnInit } from '@angular/core';
import { ManageGetLaunches } from '../../services/manage-get-launches/manage-get-launches';
import { Launch } from '../../models/launch';
import { Router } from '@angular/router';
import { InvokeGetLaunches } from '../../services/invoke-get-launches/invoke-get-launches';
import { Subject, takeUntil } from 'rxjs';
import { ResetServices } from '../../services/reset-services/reset-services';
import { IsOpenSearch } from '../../services/is-open-search/is-open-search';

@Component({
  selector: 'space-x-launches',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit, OnDestroy {
  dataSource: Launch[] = [];
  numberAllLaunch!: number;
  private destroy = new Subject();

  constructor(
    public manageGetLaunches: ManageGetLaunches,
    private router: Router,
    private invokeGetLaunches: InvokeGetLaunches,
    private resetServices: ResetServices,
    public isOpenSearch: IsOpenSearch
  ) {}

  ngOnInit(): void {
    this.resetServices.reset();
    this.getLaunches();
    this.invokeGetLaunches.invokeObservable.pipe(takeUntil(this.destroy)).subscribe(() => {
      this.getLaunches();
    });
  }

  goBack() {
    this.router.navigate(['']);
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
