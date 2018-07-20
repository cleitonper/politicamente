import {
  ParliamentarianAction,
  ParliamentarianActionType,
}                                from './parliamentarian.action';
import {
  State,
  adapter,
  initialState,
}                                 from './parliamentarian.state';

export function parliamentarianReducer(
    state: State = initialState,
    action: ParliamentarianAction
  ): State {
  switch (action.type) {
    case ParliamentarianActionType.LOAD_LIST:
      return { ...state, isLoading: true };
    case ParliamentarianActionType.LOAD_LIST_SUCCESS: {
      const newState = { ...state, isLoading: false, hasError: false };
      return adapter.addMany(action.payload, newState);
    }
    case ParliamentarianActionType.LOAD_SUCCESS:
      return adapter.addOne(action.payload, state);
    case ParliamentarianActionType.INCREMENT_PAGE:
      return { ...state, filters: { ...state.filters, pagina: action.payload } };
    case ParliamentarianActionType.FILTER:
      return { ...state, isLoading: true };
    case ParliamentarianActionType.SET_FILTERS:
      return { ...state, filters: action.payload };
    case ParliamentarianActionType.FILTER_SUCCESS: {
      const newState = { ...state, isLoading: false, hasError: false };
      return adapter.addAll(action.payload, newState);
    }
    case ParliamentarianActionType.UPDATE_PAGE_DETAIL:
      return { ...state, page: action.payload };
    case ParliamentarianActionType.LOAD_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case ParliamentarianActionType.SELECT:
      return { ...state, selectedParliamentarianId: action.payload };
    default:
      return state;
  }
}