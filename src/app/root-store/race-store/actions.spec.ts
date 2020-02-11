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
        const items = [new Race(1, 'Race1', 'Greece', 2, 3, 'Red Bull' )];
        const action = new LoadSuccessAction({items});

        expect(action.type).toBe(ActionTypes.LOAD_SUCCESS);
        expect(action.payload).toEqual({items});
    });
})