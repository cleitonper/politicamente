import { async, ComponentFixture, TestBed }    from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA }              from '@angular/core';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Store }                               from '@ngrx/store';

import { ErrorComponent } from './error.component';
import { StateModule }    from '../../state/state.module';
import {
  ParliamentarianState,
  ParliamentarianAction,
}                         from '../../state/parliamentarian';

describe('Component: Error', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;
  let store: Store<ParliamentarianState.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ ErrorComponent ],
      imports: [
        StateModule,
        HttpClientModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.get(Store);
  });

  it('should create a component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should get a error on the state when LoadError action is dispatched', () => {
    const errorDetail = { status: 404, title: 'Not Found', detail: 'HTTP Error' };
    const httpError = new HttpErrorResponse(errorDetail);
    const action = new ParliamentarianAction.LoadError(httpError);
    store.dispatch(action);

    component.error$.subscribe(
      (storedError) => expect(storedError === httpError).toBeTruthy()
    );
  });
});
