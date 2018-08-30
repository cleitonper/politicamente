import { CUSTOM_ELEMENTS_SCHEMA }           from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule }              from '@angular/router/testing';

import { ParliamentarianDetailPage } from './parliamentarian-detail.page';
import { StateModule } from '../../../state/state.module';
import { HttpClientModule } from '@angular/common/http';

describe('Page: ParliamentarianDetail', () => {
  let component: ParliamentarianDetailPage;
  let fixture: ComponentFixture<ParliamentarianDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ParliamentarianDetailPage
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        StateModule,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParliamentarianDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component instance', () => {
    expect(component).toBeTruthy();
  });

  // TODO: add more tests
});
