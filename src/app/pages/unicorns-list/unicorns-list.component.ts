import {Component} from '@angular/core';
import {Unicorn} from '../../unicorn.model';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
    selector: 'uni-unicorns-list',
    templateUrl: './unicorns-list.component.html',
    styleUrls: ['./unicorns-list.component.css']
})
export class UnicornsListComponent {

    public unicorns: Unicorn[];

    constructor(private route: ActivatedRoute) {
        this.route.data.subscribe((data: Data) => {
            this.unicorns = data.unicorns;
        });
    }

    public removeUnicornFromList(unicornToDelete: Unicorn): void {
        this.unicorns = this.unicorns.filter(unicorn => unicornToDelete.id !== unicorn.id);
    }

}
