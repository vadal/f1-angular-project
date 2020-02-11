import { Actions, ActionTypes } from './actions';
import { raceAdapter, initialState, State } from './state';

export function raceReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.LOAD_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case ActionTypes.LOAD_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };
        case ActionTypes.LOAD_SUCCESS:
            return raceAdapter.addAll(action.payload.items, {
                ...state,
                isLoading: false,
                error: null
            })
        default: {
            return state;
        }
    }
}