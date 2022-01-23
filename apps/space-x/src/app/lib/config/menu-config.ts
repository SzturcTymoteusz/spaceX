import { Route } from '../models/route';
import { InjectionToken } from '@angular/core';

export const MENU_ROUTES = new InjectionToken<Route[]>('menu');

export const MenuRoutes: Route[] = [
  {
    label: 'Launches',
    route: '/launches',
  },
  {
    label: 'Tesla Roadster',
    route: '/tesla-roadster',
  },
];
