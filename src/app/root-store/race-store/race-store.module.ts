import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RaceStoreEffects } from './effects';
import { raceReducer } from './reducer';

import { DriversService } from '../../drivers/drivers.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('race', raceReducer),
    EffectsModule.forFeature([RaceStoreEffects])
  ],
  providers: [RaceStoreEffects, DriversService]
})
export class RaceStoreModule { }
