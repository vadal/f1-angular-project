import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DriversListComponent } from './drivers-list.component';
import { Component, Input } from '@angular/core';
import { RootStoreFacade } from '../../root-store';
import { RootStoreFacadeStub } from '../../testing/root-store.facade.stub';

import { RouterStub } from '../../testing/router-stub'
import { Router } from '@angular/router';

@Component({selector:'app-drivers-table', template: ''})
class DriversTableStubComponent {
    @Input() drivers: any[];
    @Input() headings: string[];
}

@Component({selector: 'app-empty-table', template: ''})
class EmptyTableStubComponent {}

@Component({selector: 'app-spinner', template: ''})
class SpinnerStubComponent {}


describe('DriversListComponent', () => {
    let app, fixture, router;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DriversTableStubComponent,
                EmptyTableStubComponent,
                SpinnerStubComponent,
                DriversListComponent
            ],
            imports: [RouterTestingModule.withRoutes([{path: 'drivers/', component: DriversListComponent}]) ],
            providers: [
              { provide: RootStoreFacade, useClass: RootStoreFacadeStub },
              { provide: Router, useClass: RouterStub }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(DriversListComponent);
        app = fixture.debugElement.componentInstance;
        router = fixture.debugElement.injector.get(Router);
        fixture.debugElement.injector.get(RootStoreFacade);
        fixture.detectChanges();
  }));

  it('should create the drivers list component', () => {
    expect(app).toBeTruthy();
    fixture.destroy();
  });

  it('should have called driverClicked when driver is clicked', fakeAsync(() => {
    let spy = spyOn(app, 'driverClicked');

    fixture.detectChanges();

    const compiled = fixture.debugElement;
    const detailsTableComponent = compiled.queryAll(By.css('app-drivers-table'))
    
    tick(1000);
    detailsTableComponent[0].triggerEventHandler('driverClick', 'hamilton');
    
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith('hamilton');
    fixture.destroy();

  }));

  it('should have called search when input field changed', () => {
    let spy = spyOn(app, 'search');
    fixture.detectChanges();

    const compiled = fixture.debugElement;
    const inputField = compiled.query(By.css('#search-box'))

    inputField.nativeElement.value = 'ham'
    inputField.nativeElement.dispatchEvent(new Event('input'))
    
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith('ham');
    fixture.destroy();

  });
});
