import { Injectable } from '@angular/core';
import { MenuPanelOpenState } from './menu-panel-open-state';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MenuPanelOpenStateService implements MenuPanelOpenState {
  private _isOpen = new BehaviorSubject<boolean>(true);
  isOpen = this._isOpen.asObservable();

  toggle() {
    this._isOpen.next(!this._isOpen.value);
  }

  open() {
    this._isOpen.next(true);
  }

  close() {
    this._isOpen.next(false);
  }
}
