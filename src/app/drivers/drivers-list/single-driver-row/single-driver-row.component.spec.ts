import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SingleDriverRowComponent } from './single-driver-row.component';

describe('SingleDriverRowComponent', () => {
    let fixture, app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
            SingleDriverRowComponent
        ],
    }).compileComponents();
    fixture = TestBed.createComponent(SingleDriverRowComponent);
    app = fixture.debugElement.componentInstance;
    
  }));

  it('should create the single driver row component', () => {
    fixture.detectChanges();
    expect(app).toBeTruthy();
    fixture.destroy();
  });

  it('should have driver\'s details in html', async() => {
    let dob = new Date('10-02-1987');
    app.driver = {
        name: 'Firstname Lastname',
        current_constructor: 'Constructor1',
        dateOfBirth: dob,
        url: 'https://www.google.com',
        wins: 10

    }
    fixture.detectChanges();
    
    const compiled = fixture.debugElement.nativeElement;
    
    expect(compiled.querySelector('.driver-link').textContent).toContain('Firstname Lastname');
    expect(compiled.querySelector('.driver-team').textContent).toContain('Constructor1');
    expect(compiled.querySelector('.driver-wins').textContent).toContain('10');
    fixture.destroy();
  });

  it('should have called handleclick on row click', fakeAsync(() => {
    let spy = spyOn(app, 'handleClick');
    fixture.detectChanges();
    
    const compiled = fixture.debugElement;
    const driverRow = compiled.query(By.css('.driver-link'))
    let dob = new Date('10-02-1987');
    app.driver = {
        name: 'Firstname Lastname',
        current_constructor: 'Constructor1',
        dateOfBirth: dob,
        url: 'https://www.google.com'

    }
    tick(1000);
    driverRow.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledTimes(1);

    app.driverClicked.subscribe((data: any) => {
        expect(data).toBe('hamilton');
    });
    fixture.destroy();
  }));
});
