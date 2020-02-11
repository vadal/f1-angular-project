import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Breadcrumb } from '@app-models/breadcrumb.model';

export const breadcrumbAdapter: EntityAdapter<
  Breadcrumb
> = createEntityAdapter<Breadcrumb>({
  selectId: model => model.id,
  sortComparer: false
});

export interface State extends EntityState<Breadcrumb> {
}

export const initialState: State = breadcrumbAdapter.getInitialState(
  {
  }
);