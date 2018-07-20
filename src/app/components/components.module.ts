import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { IonicModule }         from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { FooterComponent }                 from './footer/footer.component';
import { HeaderComponent }                 from './header/header.component';
import { MenuComponent }                   from './menu/menu.component';
import { SearchbarComponent }              from './searchbar/searchbar.component';
import { ToggleSearchbarDirective }        from './searchbar/toggle-searchbar.directive';
import { ExpandableComponent }             from './expandable/expandable.component';
import { ParliamentarianFiltersComponent } from './parliamentarian-filters/parliamentarian-filters.component';
import { ParliamentarianListComponent }    from './parliamentarian-list/parliamentarian-list.component';
import { ErrorComponent }                  from './error/error.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    SearchbarComponent,
    ExpandableComponent,
    ParliamentarianFiltersComponent,
    ParliamentarianListComponent,
    ErrorComponent,
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    SearchbarComponent,
    ToggleSearchbarDirective,
    ExpandableComponent,
    ParliamentarianFiltersComponent,
    ParliamentarianListComponent,
    ErrorComponent,
  ],
})
export class ComponentsModule {}
