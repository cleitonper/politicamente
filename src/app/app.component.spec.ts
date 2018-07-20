import {
  ComponentFixture,
  TestBed,
  async,
}                         from '@angular/core/testing';
import {
  CUSTOM_ELEMENTS_SCHEMA
}                         from '@angular/core';

import { AppComponent }   from './app.component';

describe('Component: App', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create a component instance', () => {
    expect(component).toBeTruthy();
  });
});
