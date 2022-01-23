import { Injectable } from '@angular/core';
import { MenuPanelOpenStateService } from './menu-panel-open-state.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  useClass: MenuPanelOpenStateService,
})
export abstract class MenuPanelOpenState {
  abstract isOpen: Observable<boolean>;

  abstract toggle(): void;

  abstract open(): void;

  abstract close(): void;
}
