import * as RaceSelectors from './selectors';
import { LoadSuccessAction } from './actions';
import { raceReducer } from './reducer';
import { Race } from '../../models/driver.model';
import { initialState } from './state';

describe('Race Selectors', () => {
    let items: Race[] = [],
        actionAdd, 
        resultsAdd;

    beforeAll(() => {
        items.push(new Race(1, 'Race1', 'Greece', 2, 3, 'Red Bull' ));

        actionAdd = new LoadSuccessAction({ items });
        resultsAdd = raceReducer(initialState, actionAdd);
    })

    it('selectRaceById should return Race1 record', () => {
        expect(RaceSelectors.selectRaceById(items[0].id).projector(items)).toEqual(items[0]);
    });

    it('selectRaceBySort should return hamilton record', () => {
        expect(RaceSelectors.selectRaceBySort('grid','asc').projector(items)).toEqual([items[0]]);
    });

    it('selectRaceError should return null', () => {
        expect(RaceSelectors.selectRaceError.projector({error:null})).toEqual(null);
    });

    it('selectRaceIsLoading should return false', () => {
        expect(RaceSelectors.selectRaceIsLoading.projector({isLoading: false})).toEqual(false);
    });

})