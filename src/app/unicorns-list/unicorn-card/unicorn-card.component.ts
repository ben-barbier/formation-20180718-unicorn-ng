import {Component, Input} from '@angular/core';
import {Unicorn} from '../../unicorn.model';

@Component({
    selector: 'uni-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.css']
})
export class UnicornCardComponent {

    @Input()
    public unicorn: Unicorn;

}
