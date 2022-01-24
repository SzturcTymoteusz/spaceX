import { Component } from '@angular/core';
import { IsOpenSearch } from '../../services/is-open-search/is-open-search';
import { SearchForm } from '../../services/search-form/search-form';
import { ManageSearch } from '../../services/manage-search/manage-search';

@Component({
  selector: 'space-x-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(public isOpenSearch: IsOpenSearch, public searchForm: SearchForm, public manageSearch: ManageSearch) {}
}
