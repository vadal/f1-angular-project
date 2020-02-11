import { Component, Input, Output, EventEmitter, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { Breadcrumb } from '@app-models/breadcrumb.model';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class BreadcrumbComponent implements OnInit{

    @Input() breadcrumbs: Breadcrumb[];
    @Output() breadcrumbClicked: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit() {
    }

    navigateTo(breadcrumb: Breadcrumb) {
        this.breadcrumbClicked.emit(breadcrumb);
    }
}