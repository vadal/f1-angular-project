import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Race, Driver } from '@app-models/driver.model';

@Injectable()
export class RootStoreFacadeStub {
    breadcrumbs$ = of([])
    raceIsLoading$ = of(false)
    raceError$ = of('')
    sortedRaces$ = of([])
    allDriverRaces$ = of([new Race(1, 'Race1', 'Greece', 2, 3, 'Red Bull' )])
    driversCount$ = of(0)
    driverError$ = of('')
    driverIsLoading$ = of(false)
    selectedDriver$ = of(new Driver('hamilton', '/', 'Lewis','Hamilton', new Date().toString(), 'German', 10, 'Red Bull' ))
    allDrivers$ = of([new Driver('hamilton', '/', 'Lewis','Hamilton', new Date().toString(), 'German', 10, 'Red Bull' )])
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
