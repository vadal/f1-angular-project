import { initialState } from './state';

describe('Race State', () => {
    it('should return initialstate {}', () => {
        expect(initialState).toEqual({
            isLoading: false,
            error: null,
            ids:[], 
            entities:{}
        });
    });
});