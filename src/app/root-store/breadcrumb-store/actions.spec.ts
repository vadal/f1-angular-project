import { ActionTypes, AddBreadcrumbsAction, UpdateBreadcrumbAction } from './actions';
import { Breadcrumb } from '../../models/breadcrumb.model'

describe('Breadcrumb Actions', () => {
  it('should create an add action', () => {
      let breadcrumbs = [new Breadcrumb('Home', '/', true)];
        const action = new AddBreadcrumbsAction({breadcrumbs});

        expect(action.type).toEqual(ActionTypes.ADD_BREADCRUMBS);
        expect(action.payload).toEqual({breadcrumbs});
  });

  it('should create an update action', () => {
    let changes = {
        id: 1,
        changes: {
            label: 'label'
        }
    };
      const action = new UpdateBreadcrumbAction({changes});

      expect(action.type).toEqual(ActionTypes.UPDATE_BREADCRUMB);
      expect(action.payload).toEqual({changes});
});
});