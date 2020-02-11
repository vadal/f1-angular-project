import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SpinnerComponent } from './spinner.component';
import { EmptyTableComponent } from './empty-table.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    EmptyTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SpinnerComponent, EmptyTableComponent]
})
export class SharedModule { }
