import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', 
    loadChildren: 'app/pages/home/home.module#HomePageModule'
  },
  { 
    path: 'parliamentarians', 
    loadChildren: 'app/pages/parliamentarians/parliamentarians.module#ParliamentariansPageModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
