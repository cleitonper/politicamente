import { HttpErrorResponse } from '@angular/common/http';
import { Action }            from '@ngrx/store';

import {
  Parliamentarian,
  ParliamentarianParams
}                            from '../../shared/model/parliamentarian.model';
import { Page } from '../../shared/model/page.model';

export enum ParliamentarianActionType {
  LOAD_LIST =          '[Parliamentarian] List',
  LOAD_LIST_SUCCESS =  '[Parliamentarian] List Success',
  INCREMENT_PAGE =     '[Parliamentarian] Increment Filter Page',
  LOAD =               '[Parliamentarian] Get',
  LOAD_SUCCESS =       '[Parliamentarian] Get Success',
  UPDATE_PAGE_DETAIL = '[Parliamentarian] Update Page Detail',
  FILTER =             '[Parliamentarian] Filter',
  SET_FILTERS =        '[Parliamentarian] Set Filters on the State',
  FILTER_SUCCESS =     '[Parliamentarian] Filter Success',
  LOAD_ERROR =         '[Parliamentarian] Load Error',
  SELECT =             '[Parliamentarian] Select',
  REMOVE =             '[Parliamentarian] Remove Selected',
}

export class LoadList implements Action {
  readonly type = ParliamentarianActionType.LOAD_LIST;
}

export class LoadListSuccess implements Action {
  readonly type = ParliamentarianActionType.LOAD_LIST_SUCCESS;

  constructor(public payload: Array<Parliamentarian>) {}
}

export class IncrementPage implements Action {
  readonly type = ParliamentarianActionType.INCREMENT_PAGE;

  constructor(public payload: number) {}
}

export class Load implements Action {
  readonly type = ParliamentarianActionType.LOAD;

  constructor(public payload: number) {}
}

export class LoadSuccess implements Action {
  readonly type = ParliamentarianActionType.LOAD_SUCCESS;

  constructor(public payload: Parliamentarian) {}
}

export class SetPage implements Action {
  readonly type = ParliamentarianActionType.UPDATE_PAGE_DETAIL;

  constructor(public payload: Page) {}
}

export class Filter implements Action {
  readonly type = ParliamentarianActionType.FILTER;

  constructor(public payload: ParliamentarianParams) {}
}

export class SetFilters implements Action {
  readonly type = ParliamentarianActionType.SET_FILTERS;

  constructor(public payload: ParliamentarianParams) {}
}

export class FilterSuccess implements Action {
  readonly type = ParliamentarianActionType.FILTER_SUCCESS;

  constructor(public payload: Array<Parliamentarian>) {}
}

export class LoadError implements Action {
  readonly type = ParliamentarianActionType.LOAD_ERROR;

  constructor(public payload: HttpErrorResponse) {}
}

export class Select implements Action {
  readonly type = ParliamentarianActionType.SELECT;

  constructor(public payload: number) {}
}

export class Remove implements Action {
  readonly type = ParliamentarianActionType.REMOVE;
}

export type ParliamentarianAction =
  LoadList
  | LoadListSuccess
  | IncrementPage
  | Load
  | LoadSuccess
  | SetPage
  | SetFilters
  | Filter
  | FilterSuccess
  | LoadError
  | Select
  | Remove;
