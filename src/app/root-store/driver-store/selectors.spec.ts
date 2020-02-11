import * as DriverSelectors from './selectors';
import { LoadSuccessAction } from './actions';
import { driverReducer } from './reducer';
import { Driver } from '../../models/driver.model';
import { initialState } from './state';

describe('Driver Selectors', () => {
    let items: Driver[] = [],
        actionAdd, 
        resultsAdd;

    beforeAll(() => {
        items.push(new Driver('hamilton', '/', 'Lewis', 'Hamilton', new Date().toString(), 'German', 10, 'Red Bull'));

        actionAdd = new LoadSuccessAction({ items });
        resultsAdd = driverReducer(initialState, actionAdd);
    })

    it('selectDriverById should return hamilton record', () => {
        expect(DriverSelectors.selectDriverById('hamilton').projector(items)).toEqual(items[0]);
    });

    it('selectFilteredDrivers should return hamilton record', () => {
        expect(DriverSelectors.selectFilteredDrivers('ham').projector(items)).toEqual([items[0]]);
    });

})