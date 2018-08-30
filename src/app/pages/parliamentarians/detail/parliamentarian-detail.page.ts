import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Store }             from '@ngrx/store';
import { Observable }        from 'rxjs';

import {
  ParliamentarianState,
  ParliamentarianAction,
  ParliamentarianSelector,
}                            from '../../../state/parliamentarian';
import { Parliamentarian }   from '../../../shared/model/parliamentarian.model';

@Component({
  selector: 'app-parliamentarian-detail',
  templateUrl: './parliamentarian-detail.page.html',
  styleUrls: ['./parliamentarian-detail.page.scss'],
})
export class ParliamentarianDetailPage implements OnInit, OnDestroy {
  public parliamentarian$: Observable<Parliamentarian>;
  public mode: 'light' | 'dark';

  constructor(
    private route: ActivatedRoute,
    private store: Store<ParliamentarianState.State>,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new ParliamentarianAction.Select(id));
    this.parliamentarian$ = this.store.select(ParliamentarianSelector.selectedParliamentarian);
  }

  ngOnDestroy() {
    this.store.dispatch(new ParliamentarianAction.Remove());
  }

  public bannerLoaded(banner) {
    this.mode = (banner.brightness > 125) ? 'dark' : 'light';
  }
}
