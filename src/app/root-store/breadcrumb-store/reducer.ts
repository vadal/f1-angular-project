import { Actions, ActionTypes } from './actions';
import { breadcrumbAdapter, initialState, State } from './state';

export function breadcrumbReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.ADD_BREADCRUMBS:
      return breadcrumbAdapter.addAll(action.payload.breadcrumbs, {
          ...state
      })
    case ActionTypes.UPDATE_BREADCRUMB:
      return breadcrumbAdapter.updateOne(action.payload.changes, state)
    default: {
      return state;
    }
  }
}