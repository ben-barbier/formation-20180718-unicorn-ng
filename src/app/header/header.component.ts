import {Component} from '@angular/core';
import {CartService} from '../cart.service';
import {Unicorn} from '../unicorn.model';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: 'uni-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    public cart: BehaviorSubject<Unicorn[]> = this.cartService.cart;

    constructor(private cartService: CartService) {
    }

}
