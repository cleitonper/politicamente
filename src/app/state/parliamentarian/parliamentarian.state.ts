import { HttpErrorResponse } from '@angular/common/http';
import {
  EntityState,
  EntityAdapter,
  createEntityAdapter,
} from '@ngrx/entity';

import { Page }               from '../../shared/model/page.model';
import {
  Parliamentarian,
  ParliamentarianParams
} from '../../shared/model/parliamentarian.model';

export interface State extends EntityState<Parliamentarian> {
  selectedParliamentarianId: number;
  filters: ParliamentarianParams;
  page: Page;
  isLoading: boolean;
  error: HttpErrorResponse;
}

export const adapter: EntityAdapter<Parliamentarian> = createEntityAdapter();

export const initialState: State = adapter.getInitialState({
  selectedParliamentarianId: null,
  filters: {
    pagina: 0
  },
  page: null,
  isLoading: false,
  error: null,
});
