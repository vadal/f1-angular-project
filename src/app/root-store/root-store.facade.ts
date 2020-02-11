import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { Update } from '@ngrx/entity';

import { Store } from '@ngrx/store';
import { DriverStoreActions, DriverStoreSelectors } from './driver-store';
import { RaceStoreActions, RaceStoreSelectors } from './race-store';
import { BreadcrumbStoreActions, BreadcrumbStoreSelectors } from './breadcrumb-store';
import * as RootStoreState from './root-state';
import { Driver, Race } from '@app-models/driver.model';
import { Breadcrumb } from '@app-models/breadcrumb.model';
import { Observable } from 'rxjs';

@Injectable()

export class RootStoreFacade {
  driversLoaded$: Observable<boolean> = this.store$.select(DriverStoreSelectors.selectDriverLoaded);
  allDrivers$: Observable<Driver[]> = this.store$.select(DriverStoreSelectors.selectAllDriverItems);
  selectedDriver$: Observable<Driver>; 
  driverIsLoading$: Observable<boolean> = this.store$.select(DriverStoreSelectors.selectDriverIsLoading);
  driverError$: Observable<string> = this.store$.select(DriverStoreSelectors.selectDriverError);

  driversCount$: Observable<number> = this.store$.select(DriverStoreSelectors.selectDriversCount);
  allDriverRaces$: Observable<Race[]> = this.store$.select(RaceStoreSelectors.selectAllRaceItems);
  sortedRaces$: Observable<Race[]>; 
  raceError$: Observable<string> = this.store$.select(RaceStoreSelectors.selectRaceError);
  raceIsLoading$: Observable<boolean> = this.store$.select(RaceStoreSelectors.selectRaceIsLoading);

  breadcrumbs$: Observable<Breadcrumb[]> = this.store$.select(BreadcrumbStoreSelectors.selectBreadcrumbItems);

  constructor(private store$: Store<RootStoreState.State>, private router: Router, private activatedRoute: ActivatedRoute) {
    this.getAllDrivers();
  }

  getAllDrivers() {
    this.store$.dispatch(new DriverStoreActions.LoadRequestAction());
  }
  
  selectDriver(driverId: string) {
    this.selectedDriver$ = this.store$.select(DriverStoreSelectors.selectDriverById(driverId));
  }

  filterDrivers(term: string): Observable<Driver[]> {
    return this.store$.select(DriverStoreSelectors.selectFilteredDrivers(term));
  }

  getAllDriverRaces(id: string) {
      this.store$.dispatch(new RaceStoreActions.LoadRequestAction({id}));
  }

  sortRaces(data): Observable<Race[]> {
    return this.store$.select(RaceStoreSelectors.selectRaceBySort(data.column, data.direction));
  }

  getBreadcrumbByLabel(label: string) {
    return this.store$.select(BreadcrumbStoreSelectors.selectBreadcrumbByLabel(label));
  }

  updateBreadcrumb(breadcrumb: Breadcrumb, newLabel: string) {
      let changes: Update<Breadcrumb> = {
        id: breadcrumb.id,
        changes: {
          label: newLabel
        }
      }
      this.store$.dispatch(new BreadcrumbStoreActions.UpdateBreadcrumbAction({changes}));
      
    
  }

  getBreadcrumbs() {
    this.router.events
    .pipe(
        filter(event => event instanceof NavigationEnd)
    ).subscribe(async() => {
      let breadcrumbs = await this.createBreadcrumbs(this.activatedRoute.root, '', [new Breadcrumb('Home','/', false)]);
      this.store$.dispatch(new BreadcrumbStoreActions.AddBreadcrumbsAction({breadcrumbs}))
    });
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const children: ActivatedRoute[] = route.children;
    if (children.length === 0) {
      breadcrumbs[breadcrumbs.length-1].last = true;
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') url += `/${routeURL}`;

      let label = child.snapshot.data['breadcrumb'];
      if (label) breadcrumbs.push(new Breadcrumb(label, url, false));
      
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
  }
}