import { Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {
  Observable,
  fromEvent,
  merge,
  of
}                 from 'rxjs';
import {
  mapTo,
  map
}                 from 'rxjs/operators';

import {
  IsOnline,
  IsOffline
}                 from './app.action';

export class AppEffects {

  @Effect()
  online: Observable<Action> = merge(
    of(navigator.onLine),
    fromEvent(window, 'online').pipe(mapTo(true)),
    fromEvent(window, 'offline').pipe(mapTo(false)),
  ).pipe(map((online) => online ? new IsOnline() : new IsOffline()));
}
