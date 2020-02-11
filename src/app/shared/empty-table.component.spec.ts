import { TestBed, async } from '@angular/core/testing';
import { EmptyTableComponent } from './empty-table.component';

describe('EmptyTableComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
            EmptyTableComponent
        ],
    }).compileComponents();
  }));

  it('should create the empty table component', () => {
    const fixture = TestBed.createComponent(EmptyTableComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
    fixture.destroy();
  });

  it('should display error message', () => {
    const fixture = TestBed.createComponent(EmptyTableComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.place-center').textContent).toContain('Sorry, there are no data available right now.');
    fixture.destroy();
  });
});
