import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { Driver } from '@app-models/driver.model';

@Component({
    selector: 'app-driver-info',
    templateUrl: './driver-info.component.html',
    styleUrls: ['driver-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class DriverInfoComponent implements OnInit{
    @Input() driver: Driver;
    
    constructor() {}

    ngOnInit(){
    }

}