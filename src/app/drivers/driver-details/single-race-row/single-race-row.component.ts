import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { Race } from '@app-models/driver.model';

@Component({
    selector: '[single-race]',
    templateUrl: 'single-race-row.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SingleRaceRowComponent implements OnInit{
    @Input() race: Race;

    constructor() {}
    
    ngOnInit() {
    }

}