import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Driver } from '@app-models/driver.model';

@Component({
    selector: 'app-drivers-table',
    templateUrl: 'drivers-table.component.html',
    styles: [`
        .table {
            width: 100%;
        }
        .single-driver:hover {
            background: rgba(225,5,0,0.2);
            cursor: pointer;
            -webkit-transition: background-color 400ms linear;
            -moz-transition: background-color 300ms linear;
            -o-transition: background-color 300ms linear;
            -ms-transition: background-color 300ms linear;
            transition: background-color 400ms linear;
        }`],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class DriversTableComponent {
    @Input() drivers: Driver[];
    @Input() headings: string[];
    @Output() driverClick: EventEmitter<string> = new EventEmitter<string>();
    
    constructor() {}


    trackByFn(index, item) {
        return item.id;
    }

    driverClicked(event) {
        this.driverClick.emit(event)
    }
}