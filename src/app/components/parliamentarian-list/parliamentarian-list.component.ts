import {
  Component,
  OnDestroy,
  OnInit,
}                              from '@angular/core';
import { Router }              from '@angular/router';
import { HttpErrorResponse }   from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Store }               from '@ngrx/store';
import {
  distinctUntilChanged,
  debounceTime,
  map,
  takeUntil,
}                              from 'rxjs/operators';

import { fadeIn }              from '../../shared/animation';
import { Page }                from '../../shared/model/page.model';
import {
  Parliamentarian,
  ParliamentarianParams
}                              from '../../shared/model/parliamentarian.model';
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
  public initialized = false;
  public parliamentarians$: Observable<Array<Parliamentarian>>;
  public isLoading$: Observable<boolean>;
  public searchedTerm$ = new Subject<string>();
  public page$: Observable<Page>;
  public error$: Observable<HttpErrorResponse>;
  public filters$: Observable<ParliamentarianParams>;
  private destroy$ = new Subject();

  constructor(
    private router: Router,
    private store: Store<ParliamentarianState.State>
  ) {}

  ngOnInit() {
    this.initializeData();
    this.initializeAutoSearch();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public setGenericAvatar(element): void {
    element.src = 'assets/imgs/art/avatar.svg';
    element.classList.add('generic');
  }

  public loadMore(infiniteScroll: any): void {
    this.store.dispatch(new ParliamentarianAction.LoadList());
    infiniteScroll.target.complete();
  }

  public showDetails(id: number) {
    return this.router.navigateByUrl(`/parliamentarians/${id}`);
  }

  private initializeAutoSearch() {
    this.searchedTerm$.pipe(
      takeUntil(this.destroy$),
      debounceTime(400),
      distinctUntilChanged(),
      map(term => this.store.dispatch
        (new ParliamentarianAction.Filter({ nome: term }))
      )
    ).subscribe();
  }

  private initializeData() {
    this.fakes = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    setTimeout(() => {
      this.store.dispatch(new ParliamentarianAction.LoadList());
      this.parliamentarians$ = this.store.select(ParliamentarianSelector.list);
      this.isLoading$ = this.store.select(ParliamentarianSelector.isLoading);
      this.page$ = this.store.select(ParliamentarianSelector.page);
      this.error$ = this.store.select(ParliamentarianSelector.error);
      this.filters$ = this.store.select(ParliamentarianSelector.filters);
      this.initialized = true;
    }, 3000);
  }
}
