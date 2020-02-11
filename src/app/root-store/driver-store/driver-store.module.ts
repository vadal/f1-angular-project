import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DriverStoreEffects } from './effects';
import { driverReducer } from './reducer';

import { DriversService } from '../../drivers/drivers.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('drivers', driverReducer),
    EffectsModule.forFeature([DriverStoreEffects])
  ],
  providers: [DriverStoreEffects, DriversService]
})
export class DriverStoreModule { }
