import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Race } from '@app-models/driver.model';

export const raceAdapter: EntityAdapter<Race> = createEntityAdapter<Race>({
    selectId: model => model.id,
    sortComparer: (a: Race, b: Race): number => a.id - b.id
})

export interface State extends EntityState<Race> {
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = raceAdapter.getInitialState({
    isLoading: false,
    error: null
})