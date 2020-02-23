import { ActionTypes, LoadFailureAction, LoadRequestAction, LoadSuccessAction } from './actions';
import { Race } from '../../models/driver.model';

describe('Race Store', () => {
    it('should create load request action', () => {
        const id = 'hamilton';
        const action = new LoadRequestAction({id});

        expect(action.type).toBe(ActionTypes.LOAD_REQUEST);
        expect(action.payload).toEqual({id:'hamilton'});
    });

    it('should create failure request action', () => {
        const error = 'error';
        const action = new LoadFailureAction({error: error});

        expect(action.type).toBe(ActionTypes.LOAD_FAILURE);
        expect(action.payload).toEqual({error: 'error'});
    });

    it('should create success request action', () => {
        const items = [{id: 1, round: 1, raceName: 'Race1', country: 'Greece', position: 2, grid: 3, car_constructor: 'Red Bull' }];
        const action = new LoadSuccessAction({items});

        expect(action.type).toBe(ActionTypes.LOAD_SUCCESS);
        expect(action.payload).toEqual({items});
    });
})