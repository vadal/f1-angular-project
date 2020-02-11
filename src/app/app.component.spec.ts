import { Component, Input } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { of } from 'rxjs';
import { RootStoreFacade } from '@root-store';
import { RootStoreFacadeStub } from './testing/root-store.facade.stub';
import { Breadcrumb } from '@app-models/breadcrumb.model';

@Component({selector: 'app-header', template: ''})
class HeaderStubComponent {}

@Component({selector: 'app-footer', template: ''})
class FooterStubComponent {}

@Component({selector: 'app-breadcrumb', template: ''})
class BreadcrumbsStubComponent {
  @Input() breadcrumbs;
}

describe('AppComponent', () => {
  const breadcrumbs: Breadcrumb[] = [
    new Breadcrumb('Home','/',true)
  ];

  let fixture, app;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HeaderStubComponent,
        FooterStubComponent,
        BreadcrumbsStubComponent,
        AppComponent
      ],
      providers: [
        { provide: RootStoreFacade, useClass: RootStoreFacadeStub }
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;

    fixture.debugElement.injector.get(RootStoreFacade);
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  afterEach(() => {
    fixture.destroy();
  })
});
