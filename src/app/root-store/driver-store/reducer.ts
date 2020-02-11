import { Actions, ActionTypes } from './actions';
import { driverAdapter, initialState, State } from './state';
import { Action } from 'rxjs/internal/scheduler/Action';

export function driverReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOAD_REQUEST: {
      return {
        ...state,
        loaded: false,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.LOAD_SUCCESS: {
      return driverAdapter.addAll(action.payload.items, {
        ...state,
        loaded: true,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.LOAD_FAILURE: {
      return {
        ...state,
        loaded: false,
        isLoading: false,
        error: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
}