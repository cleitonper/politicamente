import { ParliamentarianEffects } from "./parliamentarian.effect";
import { TestBed } from "@angular/core/testing";
import { StateModule } from "../state.module";
import { ParliamentarianAction } from ".";
import { generateParliamentarianList, generateParliamentarian } from "../../shared/util";
import { hot, cold } from 'jasmine-marbles';
import { HttpClientModule, HttpErrorResponse } from "@angular/common/http";
import { ParliamentarianService } from "../../services/parliamentarian.service";
import { Observable } from "rxjs";
import { provideMockActions } from '@ngrx/effects/testing';

describe('Effect: Parliamentarian', () => {
  let effect: ParliamentarianEffects;
  let service: ParliamentarianService;
  let actions: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StateModule,
        HttpClientModule,
      ],
      providers: [
        provideMockActions(() => actions)
      ]
    });

    effect = TestBed.get(ParliamentarianEffects);
    service = TestBed.get(ParliamentarianService);
  });

  it('should create a effect instance', () => {
    expect(effect).toBeTruthy();
  });

  it('LoadList: should return a LoadListSuccess and SetPage actions, on success', () => {
    const parliamentarians = generateParliamentarianList();
    const loadList = new ParliamentarianAction.LoadList();
    const loadListSucces = new ParliamentarianAction.LoadListSuccess(parliamentarians.data);
    const setPage = new ParliamentarianAction.SetPage(parliamentarians.page);

    actions =         hot('-a-----', { a: loadList });
    const response = cold('-b|    ', { b: parliamentarians });
    const expected = cold('--(cd)-', { c: loadListSucces, d: setPage });
    spyOn(service, 'list').and.returnValue(response);
    
    expect(effect.loadList).toBeObservable(expected);
  });

  it('LoadList: should return a LoadError action, on fail', () => {
    const error = { status: 404, title: 'Not Found', detail: 'Some HTTP Error' };
    const httpError = new HttpErrorResponse({ error: error });
    const loadList = new ParliamentarianAction.LoadList();
    const loadError = new ParliamentarianAction.LoadError(httpError.error);

    actions =         hot('-a---', { a: loadList });
    const response = cold('-#|  ', {}, httpError);
    const expected = cold('--b-)', { b: loadError });
    spyOn(service, 'list').and.returnValue(response);

    expect(effect.loadList).toBeObservable(expected);
  });

  it('LoadListSuccess: should return a IncrementPage action', () => {
    const parliamentarians = generateParliamentarianList();
    const loadListSuccess = new ParliamentarianAction.LoadListSuccess(parliamentarians.data);
    const incrementPage = new ParliamentarianAction.IncrementPage(1);

    actions =         hot('-a-', { a: loadListSuccess });
    const expected = cold('-b-', { b: incrementPage });

    expect(effect.LoadListSuccess).toBeObservable(expected);
  });

  it('Load: should return a LoadSuccess action, on success', () => {
    const parliamentarian = generateParliamentarian(1, 'Joana');
    const load = new ParliamentarianAction.Load(1);
    const loadSuccess = new ParliamentarianAction.LoadSuccess(parliamentarian);

    actions =         hot('-a--', { a: load });
    const response = cold('-b| ', { b: parliamentarian });
    const expected = cold('--c-', { c: loadSuccess });
    spyOn(service, 'read').and.returnValue(response);

    expect(effect.load).toBeObservable(expected);
  });

  it('Load: should return a LoadError action, on fail', () => {
    const error = { status: 404, title: 'Not Found', detail: 'Some HTTP Error' };
    const httpError = new HttpErrorResponse({ error: error });
    const load = new ParliamentarianAction.Load(1);
    const loadError = new ParliamentarianAction.LoadError(httpError.error);

    actions =         hot('-a--', { a: load });
    const response = cold('-#| ', {}, httpError);
    const expected = cold('--c-', { c: loadError });
    spyOn(service, 'read').and.returnValue(response);

    expect(effect.load).toBeObservable(expected);
  });

  it('Filter: should return a SetFilters action', () => {
    const filter = new ParliamentarianAction.Filter({});
    const setFilters = new ParliamentarianAction.SetFilters({ pagina: 1 });

    actions =         hot('-a-', { a: filter });
    const expected = cold('-c-', {c: setFilters });

    expect(effect.filter).toBeObservable(expected);
  });

  it('SetFilters: should return a FilterSuccess and SetPage actions, on success', () => {
    const parliamentarians = generateParliamentarianList();
    const setFilters = new ParliamentarianAction.SetFilters({ pagina: 1 });
    const filterSuccess = new ParliamentarianAction.FilterSuccess(parliamentarians.data);
    const setPage = new ParliamentarianAction.SetPage(parliamentarians.page);
    
    actions =         hot('-a-----', { a: setFilters });
    const response = cold('-b|    ', { b: parliamentarians });
    const expected = cold('--(cd)-', { c: filterSuccess, d: setPage });
    spyOn(service, 'list').and.returnValue(response);

    expect(effect.setFlters).toBeObservable(expected);
  });

  it('SetFilters: should return LoadError action, on fail', () => {
    const error = { status: 404, title: 'Not Found', detail: 'Some HTTP Error' };
    const httpError = new HttpErrorResponse({ error: error });
    const setFilters = new ParliamentarianAction.SetFilters({ pagina: 1 });
    const loadError = new ParliamentarianAction.LoadError(httpError.error);

    actions =         hot('-a--', { a: setFilters });
    const response = cold('-#| ', {}, httpError);
    const expected = cold('--b-', { b: loadError });
    spyOn(service, 'list').and.returnValue(response);

    expect(effect.setFlters).toBeObservable(expected);
  });
});
