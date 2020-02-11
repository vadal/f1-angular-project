import { initialState } from './state';

describe('Breadcrumb State', () => {
    it('should return initialstate {}', () => {
        expect(initialState).toEqual({ids:[], entities:{}});
    });
});