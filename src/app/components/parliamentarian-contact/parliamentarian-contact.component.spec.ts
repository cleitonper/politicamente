import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule }                 from '@angular/common/http';

import { ParliamentarianContactComponent } from './parliamentarian-contact.component';
import { StateModule }                     from '../../state/state.module';
import { PipesModule }                     from '../../pipes/pipes.module';

describe('Component: ParliamentarianContact', () => {
  let component: ParliamentarianContactComponent;
  let fixture: ComponentFixture<ParliamentarianContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParliamentarianContactComponent ],
      imports: [
        HttpClientModule,
        StateModule,
        PipesModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParliamentarianContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component instance', () => {
    expect(component).toBeTruthy();
  });

  // TODO: add more tests
});
