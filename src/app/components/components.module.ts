import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { IonicModule }         from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule }        from '@angular/router';

import { FooterComponent }                  from './footer/footer.component';
import { HeaderComponent }                  from './header/header.component';
import { MenuComponent }                    from './menu/menu.component';
import { SearchbarComponent }               from './searchbar/searchbar.component';
import { ToggleSearchbarDirective }         from './searchbar/toggle-searchbar.directive';
import { ExpandableComponent }              from './expandable/expandable.component';
import { ParliamentarianFiltersComponent }  from './parliamentarian-filters/parliamentarian-filters.component';
import { ParliamentarianListComponent }     from './parliamentarian-list/parliamentarian-list.component';
import { ErrorComponent }                   from './error/error.component';
import { ParliamentarianContactComponent }  from './parliamentarian-contact/parliamentarian-contact.component';
import { ParliamentarianSpendingComponent } from './parliamentarian-spending/parliamentarian-spending.component';
import { PartyBannerComponent }                 from './party-banner/party-banner.component';
import { ParliamentarianPresentationComponent } from './parliamentarian-presentation/parliamentarian-presentation.component';
import { TabsComponent }                        from './tabs/tabs.component';
import { TabComponent }                         from './tab/tab.component';
import { PipesModule }                          from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    IonicModule.forRoot(),
    PipesModule,
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
    PartyBannerComponent,
    ParliamentarianPresentationComponent,
    TabsComponent,
    TabComponent,
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
    ParliamentarianContactComponent,
    ParliamentarianSpendingComponent,
    PartyBannerComponent,
    ParliamentarianPresentationComponent,
    TabsComponent,
    TabComponent,
  ],
})
export class ComponentsModule {}
