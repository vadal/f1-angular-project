import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Breadcrumb } from '@app-models/breadcrumb.model';

export enum ActionTypes {
    ADD_BREADCRUMBS = '[Breadcrumb] Add',
    UPDATE_BREADCRUMB = '[Breadcrumb] Update'
}

export class AddBreadcrumbsAction implements Action {
    readonly type = ActionTypes.ADD_BREADCRUMBS;
    constructor(public payload: { breadcrumbs: Breadcrumb[] }) {}
}

export class UpdateBreadcrumbAction implements Action {
  readonly type = ActionTypes.UPDATE_BREADCRUMB;
  constructor(public payload: { changes: Update<Breadcrumb>}) {}
}

export type Actions = AddBreadcrumbsAction | UpdateBreadcrumbAction;