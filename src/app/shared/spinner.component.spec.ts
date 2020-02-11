import { TestBed, async } from '@angular/core/testing';
import { SpinnerComponent } from './spinner.component';

describe('SpinnerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
            SpinnerComponent
        ],
    }).compileComponents();
  }));

  it('should create the spinner component', () => {
    const fixture = TestBed.createComponent(SpinnerComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    expect(app).toBeTruthy();

    fixture.destroy();
  });

  it('should display loading message', () => {
    const fixture = TestBed.createComponent(SpinnerComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.place-center').textContent).toContain('Loading... Please wait.');
    fixture.destroy();
  });
});
