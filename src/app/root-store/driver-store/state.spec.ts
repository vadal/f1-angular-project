import { initialState } from './state';

describe('Driver State', () => {
    it('should return initialstate {}', () => {
        expect(initialState).toEqual({
            isLoading: false,
            error: null,
            loaded: false,
            ids:[], 
            entities:{}
        });
    });
});