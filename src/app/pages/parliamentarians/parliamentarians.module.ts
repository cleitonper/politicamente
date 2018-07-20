import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule }          from '@ionic/angular';

import { ParliamentariansPage } from './parliamentarians.page';
import { ComponentsModule }     from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: ParliamentariansPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ParliamentariansPage]
})
export class ParliamentariansPageModule {}
