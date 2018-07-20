import {Injectable} from '@angular/core';
import {Unicorn} from './unicorn.model';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    public cart: BehaviorSubject<Unicorn[]> = new BehaviorSubject([]);

    public addUnicorn(unicorn: Unicorn): void {
        this.cart.next(this.cart.value.concat(unicorn));
    }

    public removeUnicorn(unicornToRemove: Unicorn): void {
        this.cart.next(this.cart.value.filter(unicorn => unicorn.id !== unicornToRemove.id));
    }

    public cartContainsCurrently(unicornToFind: Unicorn): boolean {
        return this.cart.value.includes(unicornToFind);
    }

    public cartContains(unicorn: Unicorn): Observable<boolean> {
        return this.cart.pipe(
            map((): boolean => this.cartContainsCurrently(unicorn)),
        );
    }
}
