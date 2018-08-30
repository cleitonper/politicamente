import { NgModule }   from '@angular/core';

import { NoDashPipe } from './no-dash.pipe';

@NgModule({
  exports: [
    NoDashPipe,
  ],
  declarations: [
    NoDashPipe,
  ],
})
export class PipesModule {}
