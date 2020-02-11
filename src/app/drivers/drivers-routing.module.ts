import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriversComponent } from './drivers.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';


const routes: Routes = [
  { 
    path: 'drivers', 
    component: DriversComponent, 
    data: {
        breadcrumb: 'Driver Standings'
    },
    children: [
        { 
            path: '', 
            component: 
            DriversListComponent,
            data: {
                breadcrumb: null
            } 
        },
        { 
            path: ':id/details', 
            component: DriverDetailsComponent,
            data: {
                breadcrumb: ":id"
            } 
        }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DriversRoutingModule { }