import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParliamentarianPresentationComponent } from './parliamentarian-presentation.component';

describe('Component: ParliamentarianPresentation', () => {
  let component: ParliamentarianPresentationComponent;
  let fixture: ComponentFixture<ParliamentarianPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParliamentarianPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParliamentarianPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component instance', () => {
    expect(component).toBeTruthy();
  });

  // TODO: add more tests
});
