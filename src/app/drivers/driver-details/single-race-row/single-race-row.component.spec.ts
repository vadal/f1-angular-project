import { TestBed, async } from '@angular/core/testing';
import { SingleRaceRowComponent } from './single-race-row.component';

describe('SingleRaceRowComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
            SingleRaceRowComponent
        ],
    }).compileComponents();
  }));

  it('should create the single race row component', () => {
    const fixture = TestBed.createComponent(SingleRaceRowComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    
    expect(app).toBeTruthy();
    fixture.destroy();
  });

  it('should have race\'s details in html', () => {
    const fixture = TestBed.createComponent(SingleRaceRowComponent);
    const app: SingleRaceRowComponent = fixture.debugElement.componentInstance;
    app.race = {
        id: 1,
        country: 'Germany',
        round: 1,
        grid: 2,
        raceName: 'Grand Prix',
        car_constructor: 'Constructor 1',
        position: 3
    }
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.race-round').textContent).toContain('1');
    expect(compiled.querySelector('.race-name').textContent).toContain('Grand Prix');
    expect(compiled.querySelector('.race-team').textContent).toContain('Constructor 1');
    expect(compiled.querySelector('.race-grid').textContent).toContain('2');
    expect(compiled.querySelector('.race-position').textContent).toContain('3');
    fixture.destroy();
  });
});
