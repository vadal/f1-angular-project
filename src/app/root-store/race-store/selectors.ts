import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { Race } from '@app-models/driver.model';
import { raceAdapter, State  } from './state';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectRaceState: MemoizedSelector<object, State> = createFeatureSelector<State>('race');

export const selectAllRaceItems: (state: object) => Race[] = raceAdapter.getSelectors(selectRaceState).selectAll;

export const selectRaceById = (id: number) => createSelector(selectAllRaceItems, (allRaces: Race[]) => {
    return allRaces ? allRaces.find(p => p.id === id) : null;
})

export const selectRaceBySort = (column: string, direction: string) => createSelector(selectAllRaceItems, (allRaces: Race[]) => {
    return allRaces ? allRaces.sort((a, b) => {
       if(direction == 'asc') { 
           if(isNaN(a[column])) {
                return a[column] > b[column] ? 1 : -1;
           } else {
                return a[column] - b[column]
           }
        } else {
            if(isNaN(a[column])) {
                return b[column] > allRaces[column] ? 1 : -1;
            } else {
                return b[column] - a[column]
            }
        }
    }) : null;
})

export const selectRaceError: MemoizedSelector<object, any> = createSelector(selectRaceState, getError);

export const selectRaceIsLoading: MemoizedSelector<object, boolean> = createSelector(selectRaceState, getIsLoading);