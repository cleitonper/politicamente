import { Component, Input }      from '@angular/core';
import { Store }                 from '@ngrx/store';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray
}                                from '@angular/forms';

import { states, parties }       from '../../shared/data';
import { Filter }                from '../../shared/model/filter';
import { ParliamentarianParams } from '../../shared/model/parliamentarian.model';
import {
  ParliamentarianState,
  ParliamentarianAction
}                                from '../../state/parliamentarian';
import { MenuController } from '@ionic/angular';

/**
 * TODO: Implement clear filters feature
**/

@Component({
  selector: 'app-parliamentarian-filters',
  templateUrl: './parliamentarian-filters.component.html',
  styleUrls: ['./parliamentarian-filters.component.scss']
})
export class ParliamentarianFiltersComponent {
  @Input()
  public contentId: string;
  public filterList: Array<Filter>;
  public form: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private store: Store<ParliamentarianState.State>,
    private menu: MenuController,
  ) {
    this.initializeFilters();
    this.initializeForm();
  }


  public toggle(filter: Filter, filters = this.filterList): void {
    filters = filters.map((item) => {
      if (item === filter) {
        item.isOpen = !item.isOpen;
        return item;
      }
    });
  }


  private initializeFilters(): void {
    this.filterList = [
      { name: 'siglaUf',      label: 'Estado',  isOpen: false, options: states },
      { name: 'siglaPartido', label: 'Partido', isOpen: false, options: parties },
    ];
  }


  private initializeForm(): void {
    const formArrayList: Array<FormArray> = [];

    for (const filter of this.filterList) {
      const controls = filter.options.map((option) => new FormControl(false));
      formArrayList[filter.name] = new FormArray(controls);
    }

    this.form = this.formBuilder.group(formArrayList);
  }

  private getSelectedFilters(): ParliamentarianParams {
    const filters = {};

    for (const filter of this.filterList) {
      filters[filter.name] = this.form.value[filter.name]
        .map((value, index) => value ? filter.options[index].value : null)
        .filter((value) => value !== null);

      if (!filters[filter.name].length) {
        delete filters[filter.name];
      }
    }

    return filters;
  }


  public submit(): void {
    const filters = this.getSelectedFilters();
    this.menu.close();
    this.store.dispatch(new ParliamentarianAction.Filter(filters));
  }
}
