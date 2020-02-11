import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { breadcrumbReducer } from './reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('breadcrumb', breadcrumbReducer)
  ]
})
export class BreadcrumbStoreModule { }
