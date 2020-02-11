import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
  } from '@ngrx/store';
          
  
import { breadcrumbAdapter, State } from './state';
import { Breadcrumb } from '@app-models/breadcrumb.model';
  
export const selectBreadcrumbState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('breadcrumb');

export const selectBreadcrumbItems: (
  state: object
) => Breadcrumb[] = breadcrumbAdapter.getSelectors(selectBreadcrumbState).selectAll;


export const selectBreadcrumbByLabel = (label: string) => 
    createSelector(
      selectBreadcrumbItems, 
      (allBreadcrumbs: Breadcrumb[]) => {
        return allBreadcrumbs ? allBreadcrumbs.find(p => p.label == label) : null
    })