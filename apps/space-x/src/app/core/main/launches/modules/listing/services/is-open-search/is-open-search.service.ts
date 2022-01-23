import { Injectable } from '@angular/core';
import { IsOpenSearch } from './is-open-search';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class IsOpenSearchService implements IsOpenSearch {
  private _isOpenSubject = new BehaviorSubject(false);
  isOpen = this._isOpenSubject.asObservable();

  toggle() {
    this._isOpenSubject.next(!this._isOpenSubject.value);
  }

  reset() {
    this._isOpenSubject.next(false);
  }
}
