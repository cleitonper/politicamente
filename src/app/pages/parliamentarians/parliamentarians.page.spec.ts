import {
  ComponentFixture,
  TestBed,
  async,
}                                 from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ParliamentariansPage }   from './parliamentarians.page';

describe('Page: Parliamentarians', () => {
  let component: ParliamentariansPage;
  let fixture: ComponentFixture<ParliamentariansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ParliamentariansPage
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParliamentariansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component instance', () => {
    expect(component).toBeTruthy();
  });
});
