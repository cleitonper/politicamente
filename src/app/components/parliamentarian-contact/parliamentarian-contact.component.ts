import {
  Component,
  OnDestroy,
  OnInit,
}                    from '@angular/core';
import { Store }     from '@ngrx/store';
import { Subject }   from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
  ParliamentarianState,
  ParliamentarianSelector,
}                          from '../../state/parliamentarian';
import { Parliamentarian } from '../../shared/model/parliamentarian.model';

@Component({
  selector: 'app-parliamentarian-contact',
  templateUrl: './parliamentarian-contact.component.html',
  styleUrls: ['./parliamentarian-contact.component.scss'],
})
export class ParliamentarianContactComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  public parliamentarian: Parliamentarian;

  constructor(
    private store: Store<ParliamentarianState.State>
  ) { }

  ngOnInit() {
    this.store.select(ParliamentarianSelector.selectedParliamentarian)
    .pipe(takeUntil(this.destroy$))
    .subscribe((parliamentarian) => this.parliamentarian = parliamentarian);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get address(): string {
    const { predio, andar, sala } = (!!this.parliamentarian.gabinete)
    ? this.parliamentarian.gabinete
    : null;
    return `Palácio do Planalto, prédio ${predio}, ${andar}º andar, sala ${sala} - Brasília, DF, 70150-900`;
  }

}
