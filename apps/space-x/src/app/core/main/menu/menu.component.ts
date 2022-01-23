import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MenuPanelOpenState } from '../../../lib/services/menu-panel-open-state/menu-panel-open-state';
import { MENU_ROUTES } from '../../../lib/config/menu-config';
import { Route } from '../../../lib/models/route';
import { ActiveCard } from '../../../lib/services/active-card/active-card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'space-x-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  constructor(
    public menuPanelOpenState: MenuPanelOpenState,
    @Inject(MENU_ROUTES) public menuRoutes: Route[],
    public activeCard: ActiveCard,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activeCard.setCards(this.menuRoutes);
    this.activeCard.setInitialCard(this.activatedRoute.routeConfig?.path as string);
  }

  ngOnDestroy() {
    this.activeCard.reset();
  }
}
