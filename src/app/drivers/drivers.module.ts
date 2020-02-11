import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriversComponent } from './drivers.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';

import { DriversTableComponent } from './drivers-list/driver-table/driver-table.component';
import { SingleDriverRowComponent } from './drivers-list/single-driver-row/single-driver-row.component';

import { DetailsTableComponent } from './driver-details/details-table/details-table.component';
import { SingleRaceRowComponent } from './driver-details/single-race-row/single-race-row.component';
import { DriverInfoComponent } from './driver-details/driver-info/driver-info.component';

import { RootStoreFacade } from '@root-store';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DriversComponent,
    DriversTableComponent,
    SingleDriverRowComponent,
    DriversListComponent,
    DetailsTableComponent,
    SingleRaceRowComponent,
    DriverInfoComponent,
    DriverDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DriversRoutingModule,
    SharedModule
  ],
  providers: [RootStoreFacade]
})
export class DriversModule { }
