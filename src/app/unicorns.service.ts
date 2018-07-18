import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Unicorn} from './unicorn.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UnicornsService {

    constructor(private http: HttpClient) {
    }

    public getAll(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>('http://localhost:3000/unicorns');
    }

}
