import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { StoreModule }   from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { parliamentarianReducer } from './parliamentarian.reducer';
import { ParliamentarianEffects } from './parliamentarian.effect';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('parliamentarian', parliamentarianReducer),
    EffectsModule.forFeature([ParliamentarianEffects]),
  ],
  providers: [
    ParliamentarianEffects,
  ]
})
export class ParliamentarianStateModule {}
