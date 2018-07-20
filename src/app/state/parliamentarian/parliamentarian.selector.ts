import {
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';

import {
  adapter,
  State,
} from './parliamentarian.state';


const { selectAll } = adapter.getSelectors();

const selectParliamentarianState =
  createFeatureSelector<State>('parliamentarian');

const getSelectedParliamentarianId = (state: State) => state.selectedParliamentarianId;
const getEerror = (state: State) => state.error;
const getIsLoading = (state: State) => state.isLoading;
const getPage = (state: State) => state.page;

export const list = createSelector(
  selectParliamentarianState,
  selectAll
);

export const selectedParliamentarianId = createSelector(
  selectParliamentarianState,
  getSelectedParliamentarianId
);

export const isLoading = createSelector(
  selectParliamentarianState,
  getIsLoading
);

export const error = createSelector(
  selectParliamentarianState,
  getEerror
);

export const page = createSelector(
  selectParliamentarianState,
  getPage
);
