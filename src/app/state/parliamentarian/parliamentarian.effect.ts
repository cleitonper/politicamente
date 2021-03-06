import { HttpErrorResponse }       from '@angular/common/http';
import { Injectable }              from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action, Store }           from '@ngrx/store';
import {
  Observable,
  of,
}                                  from 'rxjs';
import {
  withLatestFrom,
  catchError,
  switchMap,
  pluck,
  map,
  delay,
}                                  from 'rxjs/operators';

import { ParliamentarianService }  from '../../services/parliamentarian.service';
import { RootState }               from '../root.state';
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
  Select,
}                                  from './parliamentarian.action';
import { customError }             from '../../shared/util';

@Injectable()
export class ParliamentarianEffects {
  constructor(
    private actions: Actions,
    private store: Store<RootState>,
    private parliamentarianService: ParliamentarianService,
  ) {}

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
          withLatestFrom(this.store),
          switchMap(
            ([apiError, store]) => (store.app.online) ? of(new LoadError(apiError.error)) : of(new LoadError(customError.offline.error))
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
  select: Observable<Action> = this.actions.pipe(
    ofType<Select>(ParliamentarianActionType.SELECT),
    delay(0),
    map((action) => new Load(action.payload))
  );

  @Effect()
  load: Observable<Action> = this.actions.pipe(
    ofType<Load>(ParliamentarianActionType.LOAD),
    pluck('payload'),
    switchMap((id: number) => this.parliamentarianService.read(id).pipe(
      map((parliamentarian) => new LoadSuccess(parliamentarian)),
      catchError(
        (error: HttpErrorResponse) => of(error).pipe(
          withLatestFrom(this.store),
          switchMap(
            ([apiError, store]) => (store.app.online) ? of(new LoadError(apiError.error)) : of(new LoadError(customError.offline.error))
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
      switchMap((parliamentarians) => {
        const actions: Array<any> = [
          new FilterSuccess(parliamentarians.data),
          new SetPage(parliamentarians.page),
        ];
        if (!parliamentarians.data.length) {
          actions.push(new LoadError(customError.notFound.error));
        }
        return actions;
      }),
      catchError(
        (error: HttpErrorResponse) => of(error).pipe(
          withLatestFrom(this.store),
          switchMap(
            ([apiError, store]) => (store.app.online) ? of(new LoadError(apiError.error)) : of(new LoadError(customError.offline.error))
          )
        )
      ),
    )),
  );
}
