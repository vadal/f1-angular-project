import { LoadFailureAction, LoadRequestAction, LoadSuccessAction } from './actions'
import { driverReducer } from './reducer';
import { initialState } from './state';

import { Driver } from '../../models/driver.model';

describe('Driver Reducer', () => {
    it('should update state with load request', () => {
        const action = new LoadRequestAction();
        const result = driverReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            isLoading: true,
            error: null,
            loaded: false
        })
    });

    it('should update state with failure request', () => {
        const error = 'error';
        const action = new LoadFailureAction({error});
        const result = driverReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            isLoading: false,
            error: 'error',
            loaded: false
        })
    });

    it('should update state with success request', () => {
        let items = [new Driver('hamilton', '/', 'Lewis', 'Hamilton', new Date().toString(), 'German', 10, 'Red Bull')];
        const action = new LoadSuccessAction({items});
        const result = driverReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            isLoading: false,
            error: null,
            loaded: true,
            ids: [items[0].id],
            entities: {
                [items[0].id]: items[0] 
            }
        })
    });
})