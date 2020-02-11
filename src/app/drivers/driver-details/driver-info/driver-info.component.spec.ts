import { TestBed, async } from '@angular/core/testing';
import { DriverInfoComponent } from './driver-info.component';

describe('DriverInfoComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
            DriverInfoComponent
        ],
    }).compileComponents();
  }));

  it('should create the driver info component', () => {
    const fixture = TestBed.createComponent(DriverInfoComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    expect(app).toBeTruthy();
    fixture.destroy();
  });

  it('should have driver\'s details in html', () => {
    const fixture = TestBed.createComponent(DriverInfoComponent);
    const app = fixture.debugElement.componentInstance;
    let dob = new Date('10-02-1987');
    app.driver = {
        name: 'Firstname Lastname',
        current_constructor: 'Constructor1',
        dateOfBirth: dob,
        url: 'https://www.google.com'

    }
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Firstname Lastname');
    expect(compiled.querySelector('.driver-constructor').textContent).toContain('Constructor1');
    expect(compiled.querySelector('.driver-dob').textContent).toContain('Oct 2, 1987');
    fixture.destroy();
  });
});
