import {Component} from '@angular/core';
import {from, Observable} from 'rxjs';
import {map, pluck, reduce, tap} from 'rxjs/operators';
import {UnicornsService} from './unicorns.service';

@Component({
    selector: 'uni-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(unicornsService: UnicornsService) {

        // unicornsService.getMagicalUnicorns().subscribe();

    }

}
