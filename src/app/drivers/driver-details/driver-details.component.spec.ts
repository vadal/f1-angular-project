import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DriverDetailsComponent } from './driver-details.component';
import { Component, Input } from '@angular/core';
import { RootStoreFacade } from '../../root-store';
import { RootStoreFacadeStub } from '../../testing/root-store.facade.stub';

import { ActivatedRouteStub } from '../../testing/activated-route-stub'
import { ActivatedRoute } from '@angular/router';

@Component({selector:'app-details-table', template: ''})
class DetailsTableStubComponent {
    @Input() races: any[];
    @Input() headings: string[];
    @Input() columns: string[];
}

@Component({selector: 'app-driver-info', template: ''})
class DriverInfoStubComponent {
    @Input() driver;
}

@Component({selector: 'app-empty-table', template: ''})
class EmptyTableStubComponent {}

@Component({selector: 'app-spinner', template: ''})
class SpinnerStubComponent {}


describe('DriverDetailsComponent', () => {
    let app, fixture, rootStoreFacade;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DetailsTableStubComponent,
                DriverInfoStubComponent,
                EmptyTableStubComponent,
                SpinnerStubComponent,
                DriverDetailsComponent
            ],
            imports: [RouterTestingModule.withRoutes([{path: 'drivers/hamilton/details', component: DriverDetailsComponent}]) ],
            providers: [
              { provide: RootStoreFacade, useClass: RootStoreFacadeStub },
              { provide: ActivatedRoute, useClass: ActivatedRouteStub }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(DriverDetailsComponent);
        app = fixture.debugElement.componentInstance;
        let activatedRoute = fixture.debugElement.injector.get(ActivatedRoute);
        rootStoreFacade = fixture.debugElement.injector.get(RootStoreFacade);
        activatedRoute.testParams = { id: 'hamilton'};
        fixture.detectChanges();
  }));

  it('should create the details info component', () => {
    expect(app).toBeTruthy();
    fixture.destroy();
  });

  it('should have called changeSort when heading is clicked', fakeAsync(() => {
    let spy = spyOn(app, 'changeSort');
    
    fixture.detectChanges();

    const compiled = fixture.debugElement;
    const detailsTableComponent = compiled.queryAll(By.css('app-details-table'))
    tick(100);
    detailsTableComponent[0].triggerEventHandler('sortChanged', {column: 'name', direction: 'asc'});
    
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith({column: 'name', direction: 'asc'});
    fixture.destroy();
  }));

});
