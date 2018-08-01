import { async, TestBed } from '@angular/core/testing';

import { AppEffects }     from './app.effect';

describe('Effect: App', () => {
  let effect: AppEffects;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        AppEffects,
      ],
    });
  }));

  beforeEach(() => {
    effect = new AppEffects();
  });

  it('should create a effect instance', () => {
    expect(effect).toBeTruthy();
  });
});
