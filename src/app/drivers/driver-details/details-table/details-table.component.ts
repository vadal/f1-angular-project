import { Component, ChangeDetectionStrategy, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Race } from '@app-models/driver.model';

@Component({
    selector: 'app-details-table',
    templateUrl: './details-table.component.html',
    styles: [`.table {width:100%;}`],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class DetailsTableComponent implements OnInit{
    @Input() races: Race[];
    @Input() headings: string[];
    @Input() columns: string[];

    @Output() sortChanged: EventEmitter<object> = new EventEmitter();
    
    sort: string = 'round';
    direction: string = 'asc';

    constructor() {}

    ngOnInit(){}

    sortBy(index) {
        if(this.columns[index] == this.sort) {
            this.direction = this.direction == 'asc' ? 'desc' : 'asc';
        } else {
            this.sort = this.columns[index];
            this.direction = 'asc';
        }
        this.sortChanged.emit({
            column: this.sort,
            direction: this.direction
        })
    }

}