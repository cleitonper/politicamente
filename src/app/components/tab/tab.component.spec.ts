import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicModule }  from '@ionic/angular';

import { TabComponent } from './tab.component';

describe('Component: Tab', () => {
  let component: TabComponent;
  let fixture: ComponentFixture<TabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TabComponent,
      ],
      imports: [
        IonicModule.forRoot(),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component instance', () => {
    expect(component).toBeTruthy();
  });

  // TODO: add more tests
});
