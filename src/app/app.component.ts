import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RootStoreFacade } from '@root-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  breadcrumbs$: Observable<any[]>;

  constructor(private router: Router, private rootStoreFacade: RootStoreFacade) {}

  ngOnInit() {
    this.rootStoreFacade.getBreadcrumbs();
    this.breadcrumbs$ = this.rootStoreFacade.breadcrumbs$;
  }

  breadcrumbClicked(breadcrumb) {
    this.router.navigate([breadcrumb.url]);
  }
}
