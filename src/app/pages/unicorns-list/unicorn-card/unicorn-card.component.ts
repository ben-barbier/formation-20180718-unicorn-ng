import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Unicorn} from '../../../unicorn.model';
import {MatDialog, MatSnackBar} from '@angular/material';
import {CartService} from '../../../cart.service';
import {UnicornsService} from '../../../unicorns.service';
import {EMPTY, Observable} from 'rxjs';
import {EditUnicornDialogComponent} from './edit-unicorn/edit-unicorn.dialog.component';
import * as _ from 'lodash';
import {catchError, filter, first, map, mergeMap, tap} from 'rxjs/operators';

@Component({
    selector: 'uni-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.css']
})
export class UnicornCardComponent implements OnInit {

    @Output()
    private deleted = new EventEmitter();

    @Input()
    public unicorn: Unicorn;

    public isInCart: Observable<boolean>;

    constructor(private unicornService: UnicornsService,
                private snackBar: MatSnackBar,
                private cartService: CartService,
                private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.isInCart = this.cartService.cartContains(this.unicorn);
    }

    public delete(): void {
        this.unicornService.delete(this.unicorn).subscribe(() => {
            this.snackBar.open(`${this.unicorn.name} à été supprimé :-/`);
            this.deleted.emit(this.unicorn);
        });
    }

    public addOrRemoveFromCart(): void {
        if (this.cartService.cartContainsCurrently(this.unicorn)) {
            this.cartService.removeUnicorn(this.unicorn);
        } else {
            this.cartService.addUnicorn(this.unicorn);
        }
    }

    openDialog() {
        this.dialog.open(EditUnicornDialogComponent, {
            data: {
                unicorn: _.cloneDeep(this.unicorn)
            }
        }).afterClosed().pipe(
            filter((updatedUnicorn: Unicorn) => !!updatedUnicorn),
            mergeMap((updatedUnicorn: Unicorn) => this.unicornService.update(updatedUnicorn)),
            tap((updatedUnicorn: Unicorn) => this.unicorn.name = updatedUnicorn.name),
            tap(() => this.snackBar.open(`Unicorn was renamed`)),
        ).subscribe();
    }
}
