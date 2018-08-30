import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule }          from '@ionic/angular';

import { ParliamentariansPage }      from './index/parliamentarians.page';
import { ComponentsModule }          from '../../components/components.module';
import { ParliamentarianDetailPage } from './detail/parliamentarian-detail.page';
import { ParliamentarianContactComponent }  from '../../components/parliamentarian-contact/parliamentarian-contact.component';
import { ParliamentarianSpendingComponent } from '../../components/parliamentarian-spending/parliamentarian-spending.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ParliamentariansPage,
      },
      {
        path: ':id',
        component: ParliamentarianDetailPage,
        children: [
          { path: 'contact', component: ParliamentarianContactComponent },
          { path: 'spending', component: ParliamentarianSpendingComponent },
          { path: '', redirectTo: 'contact' },
        ],
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ParliamentariansPage,
    ParliamentarianDetailPage,
  ],
})
export class ParliamentariansPageModule {}
