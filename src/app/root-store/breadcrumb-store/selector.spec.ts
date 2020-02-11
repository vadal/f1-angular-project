import * as BreadcrumbSelectors from './selectors';
import { AddBreadcrumbsAction } from './actions';
import { breadcrumbReducer } from './reducer';
import { Breadcrumb } from '../../models/breadcrumb.model';
import { initialState } from './state';

describe('Breadcrumb Selectors', () => {
    let breadcrumbs: Breadcrumb[] = [],
        actionAdd, resultsAdd;

    beforeAll(() => {
        breadcrumbs.push(new Breadcrumb('Home', '/', true));

        actionAdd = new AddBreadcrumbsAction({ breadcrumbs });
        resultsAdd = breadcrumbReducer(initialState, actionAdd);
    })

    it('selectBreadcrumbByLabel should return Home breadcrumb', () => {
        expect(BreadcrumbSelectors.selectBreadcrumbByLabel('Home').projector(breadcrumbs)).toEqual(breadcrumbs[0]);
    });

})