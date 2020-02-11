import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Driver } from '@app-models/driver.model';

export const driverAdapter: EntityAdapter<
  Driver
> = createEntityAdapter<Driver>({
  selectId: model => model.id,
  sortComparer: (a: Driver, b: Driver): number =>
    b.wins - a.wins
});

export interface State extends EntityState<Driver> {
    loaded: boolean;
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = driverAdapter.getInitialState(
  {
    loaded: false,
    isLoading: false,
    error: null
  }
);