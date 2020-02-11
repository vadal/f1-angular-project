import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Driver, Race } from '@app-models/driver.model';

import { RootStoreFacade } from '@root-store';


@Component({
    selector: 'app-driver-details',
    templateUrl: 'driver-details.component.html',
    styleUrls: ['driver-details.component.scss']
})

export class DriverDetailsComponent implements OnInit, OnDestroy{
    routerSubscription: Subscription;
    driverSubscription: Subscription;
    breadcrumbSubscription: Subscription;

    driver$: Observable<Driver>;
    races$: Observable<Race[]>;
    error$: Observable<string>;
    isLoading$: Observable<boolean>;

    headings: string[];
    columns: string[];

    constructor(private storeFacade: RootStoreFacade, 
                private route: ActivatedRoute) {}

    ngOnInit() {
        let id: string;
        this.headings = ['Round','Race','Team','Grid','Position'];
        this.columns = ['round','raceName','car_constructor','grid','position'];
        this.routerSubscription = this.route.params.subscribe(
            async (params: any) => {
                id = params.id;
                await this.storeFacade.selectDriver(id);
                this.storeFacade.getAllDriverRaces(id);

                this.races$ = this.storeFacade.allDriverRaces$;
                this.error$ = this.storeFacade.driverError$;
                this.isLoading$ = this.storeFacade.raceIsLoading$;
                this.driver$ = this.storeFacade.selectedDriver$;  

                this.driverSubscription = this.driver$.subscribe(dr => {
                    if(dr) {
                        this.breadcrumbSubscription = this.storeFacade.getBreadcrumbByLabel(":id").subscribe(br => {
                            if(br)
                                setTimeout(() => {
                                    this.storeFacade.updateBreadcrumb(br, dr.name);
                                },0)
                        })
                    }
                });
        });
        
    }

    changeSort(event) {
        this.races$ = this.storeFacade.sortRaces(event);
    }

    ngOnDestroy() {
        if(this.routerSubscription)
            this.routerSubscription.unsubscribe()
        if(this.driverSubscription)
            this.driverSubscription.unsubscribe()
        if(this.breadcrumbSubscription)
            this.breadcrumbSubscription.unsubscribe()
    }
}