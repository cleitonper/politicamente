import { Component, Input, OnInit, ViewChild }      from '@angular/core';
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
import { MenuController }        from '@ionic/angular';

/**
 * TODO: Implement clear filters feature
**/

@Component({
  selector: 'app-parliamentarian-filters',
  templateUrl: './parliamentarian-filters.component.html',
  styleUrls: ['./parliamentarian-filters.component.scss']
})
export class ParliamentarianFiltersComponent implements OnInit {
  @Input()
  public contentId: string;
  public filterList: Array<Filter>;
  public form: FormGroup;
  public initialized = false;


  constructor(
    private formBuilder: FormBuilder,
    private store: Store<ParliamentarianState.State>,
    private menu: MenuController,
  ) {}

  ngOnInit() {
    this.init().then((status) => this.initialized = status);
  }


  private getFilters(): Promise<Array<Filter>> {
    return Promise.resolve([
      { name: 'siglaUf',      label: 'Estado',  isOpen: false, options: states },
      { name: 'siglaPartido', label: 'Partido', isOpen: false, options: parties },
    ]);
  }


  private getFormGroup(filters: Array<Filter>): Promise<FormGroup> {
    return new Promise((resolve) => {
      const formArrayList: Array<FormArray> = [];

      for (const filter of filters) {
        const controls = filter.options.map((option) => new FormControl(false));
        formArrayList[filter.name] = new FormArray(controls);
      }

      setTimeout(() => {
        resolve(this.formBuilder.group(formArrayList));
      }, 10000);
    });
  }

  private async init(): Promise<boolean> {
    this.filterList = await this.getFilters();
    this.form = await this.getFormGroup(this.filterList);

    return true;
  }

  public toggle(filter: Filter, filters = this.filterList): void {
    filters = filters.map((item) => {
      if (item === filter) {
        item.isOpen = !item.isOpen;
        return item;
      }
    });
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
