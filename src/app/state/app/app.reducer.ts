import { AppState, initialState }   from './app.state';
import { AppAction, AppActionType } from './app.action';

export const appReducer = (
  state: AppState = initialState,
  action: AppAction
): AppState => {
  switch (action.type) {
    case AppActionType.IS_ONLINE:
      return { ...state, online: true };
    case AppActionType.IS_OFFLINE:
      return { ...state, online: false };
    default:
      return state;
  }
};
