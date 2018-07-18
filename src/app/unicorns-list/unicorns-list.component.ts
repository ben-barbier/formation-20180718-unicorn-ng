import {Component} from '@angular/core';
import {UnicornsService} from '../unicorns.service';
import {Unicorn} from '../unicorn.model';
import {Observable} from 'rxjs';

@Component({
    selector: 'uni-unicorns-list',
    templateUrl: './unicorns-list.component.html',
    styleUrls: ['./unicorns-list.component.css']
})
export class UnicornsListComponent {

    public unicorns: Observable<Unicorn[]> = this.unicornsService.getAll();

    constructor(private unicornsService: UnicornsService) {
        // unicornsService.getAll().subscribe((unicorns: Unicorn[]) => {
        //     this.unicorns = unicorns;
        // });
    }

}
