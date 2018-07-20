import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UnicornsService} from '../../unicorns.service';
import {map, pluck, tap} from 'rxjs/operators';
import {Unicorn} from '../../unicorn.model';

@Injectable({
    providedIn: 'root'
})
export class MagicalUnicornGuard implements CanActivate {

    constructor(private unicornsService: UnicornsService,
                private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot): Observable<boolean> {
        return this.unicornsService.get(next.params.id).pipe(
            map((unicorn: Unicorn) => {
                return {unicorn: unicorn, isMagical: this.unicornsService.isMagical(unicorn)};
            }),
            tap(tuple => `log ${tuple.unicorn.name} / ${tuple.isMagical}`),
            pluck('isMagical'),
            tap((canActivate: boolean) => {
                if (!canActivate) {
                    this.router.navigate(['']);
                }
            })
        );
    }
}
