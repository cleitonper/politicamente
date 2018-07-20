import {
  ComponentFixture,
  TestBed,
  async,
}                       from '@angular/core/testing';
import { SimpleChange } from '@angular/core';

import { ExpandableComponent } from './expandable.component';

describe('Component: Expandable', () => {
  let component: ExpandableComponent;
  let fixture: ComponentFixture<ExpandableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should have a content height when component is open', () => {
    const contentHeight = 100;
    fixture.elementRef.nativeElement.firstChild.style.height = `${contentHeight}px`;
    component.ngOnChanges({
      open: new SimpleChange(null, true, true)
    });
    expect(component.height).toBe(contentHeight);
  });

  it('should have a 0 height when component is closed', () => {
    const contentHeight = 100;
    fixture.elementRef.nativeElement.firstChild.style.height = `${contentHeight}px`;
    component.ngOnChanges({
      open: new SimpleChange(null, false, true)
    });
    expect(component.height).toBe(0);
  });
});
