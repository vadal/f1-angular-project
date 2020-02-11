import { Update } from '@ngrx/entity';
import { AddBreadcrumbsAction, UpdateBreadcrumbAction } from './actions';
import { breadcrumbReducer } from './reducer';
import { initialState } from './state';
import { Breadcrumb } from '../../models/breadcrumb.model'

describe('Breadcrumb Store Actions', () => {
    let breadcrumbs: Breadcrumb[] = [],
        actionAdd, resultsAdd;

    beforeAll(() => {
        breadcrumbs.push(new Breadcrumb('Home', '/', true));

        actionAdd = new AddBreadcrumbsAction({ breadcrumbs });
        resultsAdd = breadcrumbReducer(initialState, actionAdd);
    })

    it('should add breadcrumbs to state', () => {
        expect(resultsAdd).toEqual({
            ...initialState,
            entities: {
                [breadcrumbs[0].id]: breadcrumbs[0]
            },
            ids: [breadcrumbs[0].id]
        })
    })

    it('should update breadcrumb info to state', () => {

        const changes: Update<Breadcrumb> = {
            id: breadcrumbs[0].id,
            changes: {
                label: 'My Home'
            }
        }
        const action = new UpdateBreadcrumbAction({ changes });
        const result = breadcrumbReducer(resultsAdd, action);
        
        expect(result).toEqual({
            ...initialState,
            entities: {
                [breadcrumbs[0].id]: {
                    id: breadcrumbs[0].id,
                    label: 'My Home',
                    url: '/',
                    last: true
                }
            },
            ids: [breadcrumbs[0].id]
        })
    })
})