import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DriversTableComponent } from './driver-table.component';
import { Driver } from '@app-models/driver.model';
import { Component, Input } from '@angular/core';

@Component({selector:'[single-driver-row]', template: ''})
class SingleDriverRowComponent {
  @Input() driver: Driver;
}

describe('DetailsTableComponent', () => {
  let fixture, app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
          SingleDriverRowComponent,
          DriversTableComponent
        ]
    }).compileComponents();
    fixture = TestBed.createComponent(DriversTableComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('should create the drivers table component', () => {
    fixture.detectChanges();
    expect(app).toBeTruthy();
    fixture.destroy();
  });

  it('should display headings', () => {
    const expectedHeadings = ['Heading 1','Heading 2','Heading 3'];
    app.headings = expectedHeadings;
    fixture.detectChanges();

    const headings  = fixture.debugElement.queryAll(By.css('th'));
    expect(headings.length).toBe(3);
    fixture.destroy();
  });

  it('should fire driverClicked on driver click', () => {
    let spy = spyOn(app, 'driverClicked');
    app.drivers = [{id: 'hamilton', url: '/', name: 'Lewis Hamilton', dateOfBirth: new Date().toString(), nationality: 'German', wins: 10, current_constructor: 'Red Bull' }]
    fixture.detectChanges();

    const driver:any  = fixture.debugElement.queryAll(By.css('.single-driver'))[0];
    driver.triggerEventHandler('driverClicked', 'hamilton');

    app.driverClick.subscribe((e) => {
        expect(e).toBe('hamilton')
    })
    expect(spy).toHaveBeenCalledWith('hamilton');
    fixture.destroy();
  });
});
