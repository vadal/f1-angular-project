import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BreadcrumbComponent } from './breadcrumb.component';
import { Breadcrumb } from '@app-models/breadcrumb.model';

describe('BreadcrumbComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
            BreadcrumbComponent
        ],
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(BreadcrumbComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();

    fixture.destroy();
  });

  it('should have breadcrumbs input', () => {
    const fixture = TestBed.createComponent(BreadcrumbComponent);
    const app = fixture.debugElement.componentInstance;
    const expectedBreadcrumbs = [new Breadcrumb('Home', '/', true)];
    app.breadcrumbs = expectedBreadcrumbs;
    fixture.detectChanges();

    const breadcrumbs  = fixture.debugElement.queryAll(By.css('.breadcrumb'));
    expect(breadcrumbs.length).toBe(expectedBreadcrumbs.length);
    fixture.destroy();
  });

  it('should raise breadcrumbClicked event when clicked', () => {
    const fixture = TestBed.createComponent(BreadcrumbComponent);
    const app = fixture.debugElement.componentInstance;
    const expectedBreadcrumbs = [new Breadcrumb('Home', '/', false), new Breadcrumb('Second', '/second', true)];

    app.breadcrumbs = expectedBreadcrumbs;
    fixture.detectChanges();
    
    let selectedBreadcrumb: Breadcrumb, 
        breadcrumbEl = fixture.debugElement.queryAll(By.css('.breadcrumb'))[0].query(By.css('a')).nativeElement;

    app.breadcrumbClicked.subscribe((breadcrumb) => selectedBreadcrumb = breadcrumb);

    breadcrumbEl.click();
    expect(selectedBreadcrumb.label).toBe(expectedBreadcrumbs[0].label);
    fixture.destroy();
  });
});
