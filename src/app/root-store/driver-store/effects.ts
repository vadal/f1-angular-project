import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { DriversService } from '../../drivers/drivers.service';
import * as driverActions from './actions';

@Injectable()
export class DriverStoreEffects {
  constructor(private dataService: DriversService, private actions$: Actions) {}

  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<driverActions.LoadRequestAction>(
        driverActions.ActionTypes.LOAD_REQUEST
    ),
    switchMap(action =>
      this.dataService
        .getDrivers()
        .pipe(
          map(
            items =>
              new driverActions.LoadSuccessAction({
                items
              })
            ),
            catchError(error =>
              observableOf(new driverActions.LoadFailureAction({ error }))
            )
      	)
     )
  );
}