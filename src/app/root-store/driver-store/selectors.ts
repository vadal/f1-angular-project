import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
  } from '@ngrx/store';
          
  import { Driver } from '@app-models/driver.model';
  
  import { driverAdapter, State } from './state';
  
  export const getError = (state: State): any => state.error;
  
  export const getIsLoading = (state: State): boolean => state.isLoading;
  
  export const getLoaded = (state: State): boolean => state.loaded;
  
  export const selectDriverState: MemoizedSelector<
    object,
    State
  > = createFeatureSelector<State>('drivers');
  
  export const selectAllDriverItems: (
    state: object
  ) => Driver[] = driverAdapter.getSelectors(selectDriverState).selectAll;

  export const selectDriversCount: (
    state: object
  ) => number = driverAdapter.getSelectors(selectDriverState).selectTotal;
  
  export const selectDriverById = (id: string) =>
    createSelector(selectAllDriverItems, (allDrivers: Driver[]) => {
        return allDrivers ? allDrivers.find(p => p.id == id) : null;
    });

  export const selectFilteredDrivers = (term: string) => 
      createSelector(selectAllDriverItems, (allDrivers: Driver[]) => {
        return allDrivers ? allDrivers.filter(p => p.name.toLowerCase().includes(term.toLowerCase()) || 
                                            p.current_constructor.toLowerCase().includes(term.toLowerCase()) || 
                                            p.wins == parseInt(term)) : null;
      })
  
  export const selectDriverError: MemoizedSelector<object, any> = createSelector(
    selectDriverState,
    getError
  );
  
  export const selectDriverIsLoading: MemoizedSelector<
    object,
    boolean
  > = createSelector(selectDriverState, getIsLoading);

  export const selectDriverLoaded: MemoizedSelector<
    object,
    boolean
  > = createSelector(selectDriverState, getLoaded);