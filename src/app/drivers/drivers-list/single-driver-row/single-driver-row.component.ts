import { Component, ChangeDetectionStrategy, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Driver } from '@app-models/driver.model';

@Component({
    selector: '[single-driver-row]',
    templateUrl: 'single-driver-row.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SingleDriverRowComponent implements OnInit{
    @Input() driver: Driver;
    @Output() driverClicked: EventEmitter<any> = new EventEmitter();

    constructor() {}
    
    ngOnInit() {

    }

    handleClick(event) {
        this.driverClicked.emit(this.driver.id);
    }

}