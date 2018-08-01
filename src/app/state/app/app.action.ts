export enum AppActionType {
  IS_ONLINE =  '[App] Is Online',
  IS_OFFLINE = '[App] Is Offline',
}

export class IsOnline {
  readonly type = AppActionType.IS_ONLINE;
}

export class IsOffline {
  readonly type = AppActionType.IS_OFFLINE;
}

export type AppAction =
  IsOnline
  | IsOffline;
