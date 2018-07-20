import {
  ComponentFixture,
  TestBed,
  async,
}                             from '@angular/core/testing';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModuleFactoryLoader,
}                             from '@angular/core';
import {
  APP_BASE_HREF,
  Location,
}                             from '@angular/common';
import {RouterTestingModule } from '@angular/router/testing';
import { Router }             from '@angular/router';

import { MenuComponent }      from './menu.component';
import { HomePageModule }     from '../../pages/home/home.module';
import { routes }             from '../../app-routing.module';

describe('Component: Menu', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        HomePageModule,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    router.initialNavigation();
    location = TestBed.get(Location);

    const loader = TestBed.get(NgModuleFactoryLoader);
    loader.stubbedModules = { Home: HomePageModule };

    router.resetConfig([
      { path: 'home', loadChildren: 'Home' },
      { path: 'parliamentarians', loadChildren: 'Home' },
    ]);
  });

  it('should create a component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /home', () => {
    component.openPage('/home').then(() => {
      expect(location.path()).toBe('/home');
    });
  });

  it('should navigate to /parliamentarians', () => {
    component.openPage('/parliamentarians').then(() => {
      expect(location.path()).toBe('/parliamentarians');
    });
  });
});
