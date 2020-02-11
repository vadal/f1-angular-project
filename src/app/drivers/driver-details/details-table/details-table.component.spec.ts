import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DetailsTableComponent } from './details-table.component';
import { Race } from '@app-models/driver.model';
import { Component, Input } from '@angular/core';

@Component({selector:'[single-race]', template: ''})
class SingleRaceRowComponent {
  @Input() race: Race;
}

describe('DetailsTableComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
          SingleRaceRowComponent,
          DetailsTableComponent
        ]
    }).compileComponents();
  }));

  it('should create the details info component', () => {
    const fixture = TestBed.createComponent(DetailsTableComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    expect(app).toBeTruthy();
    fixture.destroy();
  });

  it('should display headings', () => {
    const fixture = TestBed.createComponent(DetailsTableComponent);
    const app = fixture.debugElement.componentInstance;
    const expectedHeadings = ['Heading 1','Heading 2','Heading 3'];
    const expectedColumns = ['C1', 'C2', 'C3']
    app.headings = expectedHeadings;
    app.columns = expectedColumns;
    fixture.detectChanges();

    const headings  = fixture.debugElement.queryAll(By.css('th'));
    expect(headings.length).toBe(3);
    fixture.destroy();
  });

  it('should fire sortChanged on heading click', () => {
    const fixture = TestBed.createComponent(DetailsTableComponent);
    const app = fixture.debugElement.componentInstance;
    const expectedHeadings = ['Heading 1','Heading 2','Heading 3'];
    const expectedColumns = ['C1', 'C2', 'C3']
    app.headings = expectedHeadings;
    app.columns = expectedColumns;
    fixture.detectChanges();

    const heading1:any  = fixture.debugElement.queryAll(By.css('th'))[0];

    app.sortChanged.subscribe((data: any) => {
      expect(data.column).toBe('C1');
      expect(data.direction).toBe('asc');
    });
    heading1.nativeElement.click();
    fixture.destroy();
  });
});
