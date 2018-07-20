import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
    name: 'magicalName',
})
export class MagicalNamePipe implements PipeTransform {

    transform(originalName: string): string {

        console.log('magicalName');

        return Array
            .from(originalName)
            .map((char, idx) => idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
            .join('');

    }

}
