import {
  ComponentFixture,
  TestBed,
  async,
}                                       from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA }       from '@angular/core';
import { HttpClientModule }             from '@angular/common/http';
import { Store }                        from '@ngrx/store';

import { ParliamentarianListComponent } from './parliamentarian-list.component';
import { StateModule }                  from '../../state/state.module';
import {
  ParliamentarianAction,
  ParliamentarianState,
}                                        from '../../state/parliamentarian';
import {
  Parliamentarian,
  ParliamentarianList,
}                                        from '../../shared/model/parliamentarian.model';
import {
  ParliamentarianService,
  MockParliamentarianService
}                                      from '../../services/parliamentarian.service';
import { generateParliamentarianList } from '../../shared/util';
import { BrowserAnimationsModule }     from '@angular/platform-browser/animations';
import { InfiniteScroll } from '@ionic/angular';

describe('Component: ParliamentarianList', () => {
  let component: ParliamentarianListComponent;
  let fixture: ComponentFixture<ParliamentarianListComponent>;
  let store: Store<ParliamentarianState.State>;
  let parliamentarianService: ParliamentarianService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ ParliamentarianListComponent ],
      imports: [
        StateModule,
        HttpClientModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: ParliamentarianService, useClass: MockParliamentarianService },
      ]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    parliamentarianService = TestBed.get(ParliamentarianService);
    fixture = TestBed.createComponent(ParliamentarianListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.get(Store);
  });

  it('should create a component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list with 15 fake items', () => {
    component.ngOnInit();
    expect(component.fakes.length).toBe(15);
  });

  it('should dispatch an LoadList action after component initializes', () => {
    const spy = spyOn(store, 'dispatch');
    const action = new ParliamentarianAction.LoadList();
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should display a list of parliamentarians after data is loaded', () => {
    const parliamentarianList = generateParliamentarianList();
    const action = new ParliamentarianAction.LoadListSuccess(parliamentarianList.data);
    store.dispatch(action);
    component.parliamentarians$.subscribe(
      (parliamentarians) => expect(parliamentarians).toEqual(parliamentarianList.data)
    );
    component.isLoading$.subscribe(
      (isLoading) => expect(isLoading).toBeFalsy()
    );
  });

  it('should select the page details on the state', () => {
    const parliamentarianList = generateParliamentarianList();
    const action = new ParliamentarianAction.SetPage(parliamentarianList.page);
    store.dispatch(action);
    component.page$.subscribe((page) => expect(page).toEqual(parliamentarianList.page));
  });

  it('should dispatch a Filter action when searching', () => {
    const term = 'Joana';
    const action = new ParliamentarianAction.Filter({ nome: term });
    const spy = spyOn(store, 'dispatch');

    component.searchedTerm$.subscribe(
      () => {},
      () => {},
      () => expect(spy).toHaveBeenCalledWith(action)
    );
    component.searchedTerm$.next(term);
    component.searchedTerm$.complete();
  });

  it('should dispatch a LoadList action when load more items', () => {
    const spy = spyOn(store, 'dispatch');
    const action = new ParliamentarianAction.LoadList();
    const infiniteScroll = { target: { complete: ():void => {} } };
    component.loadMore(infiniteScroll);
    expect(spy).toHaveBeenCalledWith(action);
  });
});