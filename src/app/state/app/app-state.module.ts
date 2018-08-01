import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { StoreModule }   from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { appReducer } from './app.reducer';
import { AppEffects } from './app.effect';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('app', appReducer),
    EffectsModule.forFeature([AppEffects]),
  ],
  providers: [
    AppEffects
  ],
})
export class AppStateModule {}
