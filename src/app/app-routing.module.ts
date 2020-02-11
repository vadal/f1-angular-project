import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
  import { AppComponent } from './app.component';
  import { DriversComponent } from './drivers/drivers.component';
  import { DriversListComponent } from './drivers/drivers-list/drivers-list.component';
  import { DriverDetailsComponent } from './drivers/driver-details/driver-details.component';


const routes: Routes = [
  { path: '', children: [
    { 
      path: '', 
      pathMatch:'full', 
      redirectTo: '/drivers', 
      data: {
        breadcrumb: 'Home'
      } 
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
