import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParliamentarianSpendingComponent } from './parliamentarian-spending.component';

describe('Component: ParliamentarianSpending', () => {
  let component: ParliamentarianSpendingComponent;
  let fixture: ComponentFixture<ParliamentarianSpendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParliamentarianSpendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParliamentarianSpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component instance', () => {
    expect(component).toBeTruthy();
  });

  // TODO: add more tests
});
