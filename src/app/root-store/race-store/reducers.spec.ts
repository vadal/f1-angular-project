import { LoadFailureAction, LoadRequestAction, LoadSuccessAction } from './actions'
import { raceReducer } from './reducer';
import { initialState } from './state';

import { Race } from '../../models/driver.model';

describe('Race Reducer', () => {
    it('should update state with load request', () => {
        const action = new LoadRequestAction({id: 'hamilton'});
        const result = raceReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            isLoading: true,
            error: null
        })
    });

    it('should update state with failure request', () => {
        const error = 'error';
        const action = new LoadFailureAction({error});
        const result = raceReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            isLoading: false,
            error: 'error'
        })
    });

    it('should update state with success request', () => {
        let items = [{id: 1, round: 1, raceName: 'Race1', country: 'Greece', position: 2, grid: 3, car_constructor: 'Red Bull' }];
        const action = new LoadSuccessAction({items});
        const result = raceReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            isLoading: false,
            error: null,
            ids: [items[0].id],
            entities: {
                [items[0].id]: items[0] 
            }
        })
    });
})