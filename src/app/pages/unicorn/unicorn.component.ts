import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';
import {Unicorn} from '../../unicorn.model';
import {UnicornsService} from '../../unicorns.service';

@Component({
    selector: 'uni-unicorn',
    templateUrl: './unicorn.component.html',
    styleUrls: ['./unicorn.component.css']
})
export class UnicornComponent {

    public unicorn: Observable<Unicorn>;

    constructor(route: ActivatedRoute,
                unicornService: UnicornsService) {
        route.params.subscribe((params: Params) => {
            this.unicorn = unicornService.get(params.id);
        });
    }

}
