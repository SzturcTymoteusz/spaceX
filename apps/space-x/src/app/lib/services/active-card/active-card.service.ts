import { Injectable } from '@angular/core';
import { ActiveCard } from './active-card';
import { BehaviorSubject } from 'rxjs';
import { Route } from '../../models/route';

@Injectable()
export class ActiveCardService implements ActiveCard {
  private _card = new BehaviorSubject<null | Route>(null);
  card = this._card.asObservable();
  private cards: Route[] = [];

  set(card: Route) {
    this._card.next(card);
  }

  setCards(cards: Route[]) {
    this.cards = cards;
  }

  setInitialCard(route: string) {
    const currentRoute = this.cards.find((card) => card.route === `/${route}`);
    if (currentRoute) {
      this._card.next(currentRoute);
    }
  }

  reset() {
    this._card.next(null);
  }
}
