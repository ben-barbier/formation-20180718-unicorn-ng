import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Unicorn} from './unicorn.model';
import {from, Observable} from 'rxjs';
import {filter, flatMap, map, mergeMap, toArray} from 'rxjs/operators';
import {Capacity} from './capacity.model';


@Injectable({
    providedIn: 'root'
})
export class UnicornsService {

    constructor(private http: HttpClient) {
    }

    public getAll(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>('http://localhost:3000/unicorns').pipe(
            flatMap(e => e),
            mergeMap((unicorn: Unicorn): Observable<Unicorn> =>
                from(unicorn.capacities).pipe(
                    mergeMap((capacityId: number): Observable<Capacity> =>
                        this.http.get<Capacity>(`http://localhost:3000/capacities/${capacityId}`)),
                    toArray(),
                    map((capacities: Capacity[]): Unicorn =>
                        Object.assign(unicorn, {capacitiesObjects: capacities})),
                )
            ),
            toArray()
        );
    }

    public get(id: number): Observable<Unicorn> {
        return this.http.get<Unicorn>(`http://localhost:3000/unicorns/${id}`);
    }

    public isMagical(unicorn: Unicorn): boolean {
        return unicorn.birthyear % 2 === 0;
    }

    /**
     * Les licornes sont magiques si elle sont nées les années paires
     * @returns {Observable<Unicorn[]>}
     */
    public getMagicalUnicorns(): Observable<Unicorn[]> {
        return this.getAll().pipe(
            flatMap(e => e),
            filter((unicorn: Unicorn) => unicorn.birthyear % 2 === 0),
            toArray()
        );
    }

    public delete(unicorn: Unicorn): Observable<any> {
        return this.http.delete<Unicorn>(`http://localhost:3000/unicorns/${unicorn.id}`);
    }

    public update(unicorn: Unicorn) {
        const { capacitiesObjects, ...unicornToUpdate } = unicorn;
        return this.http.put<Unicorn>(`http://localhost:3000/unicorns/${unicorn.id}`, unicornToUpdate);
    }
}
