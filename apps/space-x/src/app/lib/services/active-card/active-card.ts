import { Injectable } from '@angular/core';
import { ActiveCardService } from './active-card.service';
import { Observable } from 'rxjs';
import { Route } from '../../models/route';

@Injectable({
  providedIn: 'root',
  useClass: ActiveCardService,
})
export abstract class ActiveCard {
  abstract card: Observable<Route | null>;

  abstract set(card: Route): void;

  abstract setCards(cards: Route[]): void;

  abstract setInitialCard(route: string): void;

  abstract reset(): void;
}
