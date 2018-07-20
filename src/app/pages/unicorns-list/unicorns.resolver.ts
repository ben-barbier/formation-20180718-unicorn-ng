import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Unicorn} from '../../unicorn.model';
import {Observable} from 'rxjs';
import {UnicornsService} from '../../unicorns.service';

@Injectable({
    providedIn: 'root'
})
export class UnicornsResolver implements Resolve<Unicorn[]> {

    constructor(private unicornsService: UnicornsService) {
    }

    resolve(): Observable<Unicorn[]> {
        return this.unicornsService.getAll();
    }

}
