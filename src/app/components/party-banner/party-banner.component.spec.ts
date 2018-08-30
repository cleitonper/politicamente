import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyBannerComponent } from './party-banner.component';

describe('Component: PartyBanner', () => {
  let component: PartyBannerComponent;
  let fixture: ComponentFixture<PartyBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component instance', () => {
    expect(component).toBeTruthy();
  });

  // TODO: add more tests
});
