import { Component, OnInit, OnDestroy }   from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store }               from '@ngrx/store';
import {
  distinctUntilChanged,
  debounceTime,
  map,
  takeUntil,
}                              from 'rxjs/operators';

import { fadeIn }              from '../../shared/animation';
import { Parliamentarian }     from '../../shared/model/parliamentarian.model';
import { Page }                from '../../shared/model/page.model';
import {
  ParliamentarianSelector,
  ParliamentarianAction,
  ParliamentarianState,
}                              from '../../state/parliamentarian';

@Component({
  selector: 'app-parliamentarian-list',
  templateUrl: './parliamentarian-list.component.html',
  styleUrls: ['./parliamentarian-list.component.scss'],
  animations: [ fadeIn ],
})
export class ParliamentarianListComponent implements OnInit, OnDestroy {
  public fakes;
  public parliamentarians$: Observable<Array<Parliamentarian>>;
  public isLoading$: Observable<boolean>;
  public searchedTerm$ = new Subject<string>();
  public page$: Observable<Page>;
  private ngUnsubscribe = new Subject();

  constructor(
    private store: Store<ParliamentarianState.State>
  ) {}

  ngOnInit() {
    this.fakes = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    this.parliamentarians$ = this.store.select(ParliamentarianSelector.list);
    this.isLoading$ = this.store.select(ParliamentarianSelector.isLoading);
    this.page$ = this.store.select(ParliamentarianSelector.page);

    this.store.dispatch(new ParliamentarianAction.LoadList());

    this.initializeAutoSearch();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public setGenericAvatar(element): void {
    element.src = 'assets/imgs/art/avatar.svg';
    element.classList.add('generic');
  }

  public loadMore(infiniteScroll: any): void {
    this.store.dispatch(new ParliamentarianAction.LoadList());
    infiniteScroll.target.complete();
  }

  private initializeAutoSearch() {
    this.searchedTerm$.pipe(
      takeUntil(this.ngUnsubscribe),
      debounceTime(400),
      distinctUntilChanged(),
      map(term => this.store.dispatch
        (new ParliamentarianAction.Filter({ nome: term }))
      )
    ).subscribe();
  }
}
