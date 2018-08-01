import { AppState }             from './app/app.state';
import { ParliamentarianState } from './parliamentarian';

export interface RootState {
  app: AppState;
  parliamentarian: ParliamentarianState.State;
}
