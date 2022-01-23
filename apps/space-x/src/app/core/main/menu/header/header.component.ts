import { Component } from '@angular/core';
import { Authentication } from '../../../../commanders/auth/authentication/authentication';
import { MenuPanelOpenState } from '../../../../lib/services/menu-panel-open-state/menu-panel-open-state';

@Component({
  selector: 'space-x-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public authentication: Authentication, public menuPanelOpenState: MenuPanelOpenState) {}
}
