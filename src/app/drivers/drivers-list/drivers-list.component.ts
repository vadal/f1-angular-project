import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { RootStoreFacade } from '@root-store';

import { Observable } from 'rxjs';
import { Driver } from '@app-models/driver.model';

@Component({
    selector: 'app-drivers-list',
    templateUrl: './drivers-list.component.html',
    styleUrls: ['./drivers-list.component.scss']
})

export class DriversListComponent implements OnInit, OnDestroy{
    
    drivers$: Observable<Driver[]>;
    error$: Observable<string>;
    isLoading$: Observable<boolean>;
    total$: Observable<number>;

    headings: string[];
    columns: string[];

    constructor(private storeFacade: RootStoreFacade, private router: Router) {

    }

    ngOnInit() {
        this.headings = ['Name','Team','Wins'];
        this.columns = ['name','car_constructor','wins']
        this.drivers$ = this.storeFacade.allDrivers$;
        this.error$ = this.storeFacade.driverError$;
        this.isLoading$ = this.storeFacade.driverIsLoading$;
        this.total$ = this.storeFacade.driversCount$;
    }
    

    search(term: string): void {
        this.drivers$ = this.storeFacade.filterDrivers(term);
    }

    driverClicked(event) {
        this.router.navigate(['/drivers/' + event + '/details']);
    }

    ngOnDestroy() {
    }
}