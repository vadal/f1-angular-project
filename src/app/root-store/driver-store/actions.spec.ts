import { ActionTypes, LoadFailureAction, LoadRequestAction, LoadSuccessAction } from './actions';
import { Driver } from '../../models/driver.model';

describe('Driver Actions', () => {
    
    it('should create a load request action', () => {
        const action = new LoadRequestAction();

        expect(action.type).toEqual(ActionTypes.LOAD_REQUEST);
    });

    it('should create a success request action', () => {
        let items = [new Driver('hamilton', '/', 'Lewis', 'Hamilton', new Date().toString(), 'German', 10, 'Red Bull')];
        const action = new LoadSuccessAction({items});

        expect(action.type).toEqual(ActionTypes.LOAD_SUCCESS);
        expect(action.payload).toEqual({items});
    });

    it('should create a failure request action', () => {
        const error = 'error';
        const action = new LoadFailureAction({error});

        expect(action.type).toEqual(ActionTypes.LOAD_FAILURE);
        expect(action.payload).toEqual({error});
    });
});