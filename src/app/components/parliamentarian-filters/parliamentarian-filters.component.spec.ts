import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA }           from '@angular/core';
import { ReactiveFormsModule }              from '@angular/forms';
import { HttpClientModule }                 from '@angular/common/http';
import { IonicModule }                      from '@ionic/angular';
import { Store }                            from '@ngrx/store';

import { ParliamentarianFiltersComponent } from './parliamentarian-filters.component';
import { StateModule }                     from '../../state/state.module';
import {
  ParliamentarianState,
  ParliamentarianAction
}                                           from '../../state/parliamentarian';

describe('Component: ParliamentarianFilters', () => {
  let component: ParliamentarianFiltersComponent;
  let fixture: ComponentFixture<ParliamentarianFiltersComponent>;
  let store: Store<ParliamentarianState.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [
        ParliamentarianFiltersComponent
      ],
      imports: [
        IonicModule.forRoot(),
        ReactiveFormsModule,
        HttpClientModule,
        StateModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParliamentarianFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.get(Store);
  });

  it('should create a component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch a Filter action when submited', fakeAsync(() => {
    const spy = spyOn(store, 'dispatch');
    const action = new ParliamentarianAction.Filter({});
    component.ngOnInit();
    tick(10100);
    component.submit();
    expect(spy).toHaveBeenCalledWith(action);
  }));

  // TODO: add more tests.

});
