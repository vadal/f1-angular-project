import { Action } from '@ngrx/store';
import { Driver } from '@app-models/driver.model';

export enum ActionTypes {
  LOAD_REQUEST = '[Driver] Load Request',
  LOAD_FAILURE = '[Driver] Load Failure',
  LOAD_SUCCESS = '[Driver] Load Success'
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: Driver[] }) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;