import {
  NgModule,
}                                      from '@angular/core';
import { CommonModule }                from '@angular/common';
import { StoreModule }                 from '@ngrx/store';
import { EffectsModule }               from '@ngrx/effects';
import { StoreDevtoolsModule }         from '@ngrx/store-devtools';

import { environment }                 from '../../environments/environment';
import { ParliamentarianStateModule }  from './parliamentarian/parliamentarian-state.module';

@NgModule({
  imports: [
    CommonModule,
    ParliamentarianStateModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ logOnly: !environment.production }),
  ],
})
export class StateModule {}
