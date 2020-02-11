import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <header>
            <nav class="top-navigation">
                <a [routerLink]="['/']">
                    <img src="assets/images/logo.png" class="logo"/>
                </a>
                <ul>
                    <li>
                        <a [routerLink]="['/drivers']">Current Season's Driver Standings</a>
                    </li>
                </ul>
            </nav>    
        </header>`
})

export class HeaderComponent {

}