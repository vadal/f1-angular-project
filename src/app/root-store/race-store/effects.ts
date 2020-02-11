import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { DriversService } from '../../drivers/drivers.service';
import * as raceActions from './actions';

@Injectable()

export class RaceStoreEffects {
    constructor(private raceService: DriversService, private actions$: Actions) {}

    @Effect()
    loadRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<raceActions.LoadRequestAction>(
            raceActions.ActionTypes.LOAD_REQUEST
        ),
        switchMap(action => this.raceService.getDriverRaces(action.payload.id)
            .pipe(
                map(items => new raceActions.LoadSuccessAction({ items })),
                catchError(error => observableOf(new raceActions.LoadFailureAction({ error })))
            )
        )
    )
}