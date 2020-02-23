import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Race, Driver } from '@app-models/driver.model';

@Injectable()
export class RootStoreFacadeStub {
    breadcrumbs$ = of([])
    raceIsLoading$ = of(false)
    raceError$ = of('')
    sortedRaces$ = of([])
    allDriverRaces$ = of([{id: 1, raceName: 'Race1', country: 'Greece', position: 2, grid: 3, car_constructor: 'Red Bull' }])
    driversCount$ = of(0)
    driverError$ = of('')
    driverIsLoading$ = of(false)
    selectedDriver$ = of({id: 'hamilton', url: '/', name: 'Lewis Hamilton', dateOfBirth: new Date().toString(), nationality: 'German', wins: 10, current_constructor: 'Red Bull'})
    allDrivers$ = of([{id: 'hamilton', url: '/', name: 'Lewis Hamilton', dateOfBirth: new Date().toString(), nationality: 'German', wins: 10, current_constructor: 'Red Bull'}])
    driversLoaded = of(false)

    getAllDrivers() {}
    selectDriver() {}
    filterDrivers(term) {
        return of({})
    }
    getAllDriverRaces() {}
    sortRaces(data){
        return of([])
    }
    getBreadcrumbByLabel(label) {
        return of({})
    }
    updateBreadcrumb(br, label) {}

    getBreadcrumbs() {}

}
