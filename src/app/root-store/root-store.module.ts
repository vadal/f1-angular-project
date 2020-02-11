import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbStoreModule } from './breadcrumb-store';
import { DriverStoreModule } from './driver-store';
import { RaceStoreModule } from './race-store';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BreadcrumbStoreModule,
    DriverStoreModule,
    RaceStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule { }
