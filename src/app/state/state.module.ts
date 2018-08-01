import { NgModule }                    from '@angular/core';
import { CommonModule }                from '@angular/common';
import { StoreModule }                 from '@ngrx/store';
import { EffectsModule }               from '@ngrx/effects';
import { StoreDevtoolsModule }         from '@ngrx/store-devtools';

import { environment }                 from '../../environments/environment';
import { AppStateModule }              from './app/app-state.module';
import { ParliamentarianStateModule }  from './parliamentarian/parliamentarian-state.module';

const devModules = [];

if (!environment.production) {
  devModules.push(StoreDevtoolsModule.instrument());
}

@NgModule({
  imports: [
    CommonModule,
    AppStateModule,
    ParliamentarianStateModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    ...devModules,
  ],
})
export class StateModule {}
