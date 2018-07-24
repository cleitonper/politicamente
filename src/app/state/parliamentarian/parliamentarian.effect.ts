import { HttpErrorResponse }       from '@angular/common/http';
import { Injectable }              from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action, Store }           from '@ngrx/store';
import {
  Observable,
  fromEvent,
  merge,
  of,
}                                  from 'rxjs';
import {
  withLatestFrom,
  catchError,
  switchMap,
  pluck,
  map,
  mapTo,
}                                  from 'rxjs/operators';

import { ParliamentarianService }  from '../../services/parliamentarian.service';
import { AppState }                from '../app.state';
import {
  ParliamentarianActionType,
  LoadListSuccess,
  LoadSuccess,
  LoadList,
  Load,
  SetFilters,
  Filter,
  FilterSuccess,
  IncrementPage,
  LoadError,
  SetPage,
}                                  from './parliamentarian.action';

@Injectable()
export class ParliamentarianEffects {
  private online$: Observable<boolean>;
  private offlineError;

  constructor(
    private actions: Actions,
    private store: Store<AppState>,
    private parliamentarianService: ParliamentarianService,
  ) {
    this.init();
  }

  private init() {
    this.online$ = merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(mapTo(true)),
      fromEvent(window, 'offline').pipe(mapTo(false)),
    );

    const error = {
      status: 'Offline',
      title: 'Você está desconectado',
      detail: 'É necessária uma conexão ativa com a internet para acessar os recursos desta página.'
    };
    this.offlineError = new HttpErrorResponse({ error: error });
  }

  @Effect()
  loadList: Observable<Action> = this.actions.pipe(
    ofType<LoadList>(ParliamentarianActionType.LOAD_LIST),
    withLatestFrom(this.store, (action, store) => store.parliamentarian.filters),
    map((filters) => ({ ...filters, pagina: filters.pagina + 1 })),
    switchMap((filters) => this.parliamentarianService.list(filters).pipe(
      switchMap((parliamentarians) => [
        new LoadListSuccess(parliamentarians.data),
        new SetPage(parliamentarians.page)
      ]),
      catchError(
        (error: HttpErrorResponse) => of(error).pipe(
          withLatestFrom(this.online$),
          switchMap(
            ([error, isOnline]) => (isOnline) ? of(new LoadError(error.error)) : of(new LoadError(this.offlineError.error))
          )
        )
      ),
    )),
  );

  @Effect()
  LoadListSuccess: Observable<Action> = this.actions.pipe(
    ofType<LoadListSuccess>(ParliamentarianActionType.LOAD_LIST_SUCCESS),
    withLatestFrom(this.store, (action, store) => store.parliamentarian.filters.pagina),
    map((currentPage) => new IncrementPage(currentPage + 1)),
  );

  @Effect()
  load: Observable<Action> = this.actions.pipe(
    ofType<Load>(ParliamentarianActionType.LOAD),
    pluck('payload', 'id'),
    switchMap((id: number) => this.parliamentarianService.read(id).pipe(
      map((parliamentarian) => new LoadSuccess(parliamentarian)),
      catchError(
        (error: HttpErrorResponse) => of(error).pipe(
          withLatestFrom(this.online$),
          switchMap(
            ([error, isOnline]) => (isOnline) ? of(new LoadError(error.error)) : of(new LoadError(this.offlineError.error))
          )
        )
      ),
    )),
  );

  @Effect()
  filter: Observable<Action> = this.actions.pipe(
    ofType<Filter>(ParliamentarianActionType.FILTER),
    pluck('payload'),
    map((filters) => new SetFilters({ ...filters, pagina: 1 })),
  );

  @Effect()
  setFlters: Observable<Action> = this.actions.pipe(
    ofType<SetFilters>(ParliamentarianActionType.SET_FILTERS),
    pluck('payload'),
    switchMap((filters) => this.parliamentarianService.list(filters).pipe(
      switchMap((parliamentarians) => [
        new FilterSuccess(parliamentarians.data),
        new SetPage(parliamentarians.page),
      ]),
      catchError(
        (error: HttpErrorResponse) => of(error).pipe(
          withLatestFrom(this.online$),
          switchMap(
            ([error, isOnline]) => (isOnline) ? of(new LoadError(error.error)) : of(new LoadError(this.offlineError.error))
          )
        )
      ),
    )),
  );
}
