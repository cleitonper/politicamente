import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Store }             from '@ngrx/store';
import { Observable }        from 'rxjs';

import { ParliamentarianState, ParliamentarianSelector } from '../../state/parliamentarian';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  public error$: Observable<HttpErrorResponse>;

  constructor(
    private store: Store<ParliamentarianState.State>
  ) {}

  ngOnInit() {
    this.error$ = this.store.select(ParliamentarianSelector.error);
  }
}
