import { Action } from '@ngrx/store';
import { Race } from '@app-models/driver.model';

export enum ActionTypes {
    LOAD_REQUEST = '[Race] Load Request',
    LOAD_FAILURE = '[Race] Load Failure',
    LOAD_SUCCESS = '[Race] Load Success'
}

export class LoadRequestAction implements Action {
    readonly type = ActionTypes.LOAD_REQUEST;
    constructor(public payload: { id: string }) {}
}

export class LoadFailureAction implements Action {
    readonly type = ActionTypes.LOAD_FAILURE;
    constructor(public payload: { error: string }) {}
}

export class LoadSuccessAction implements Action {
    readonly type = ActionTypes.LOAD_SUCCESS;
    constructor(public payload: { items: Race[] }) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;