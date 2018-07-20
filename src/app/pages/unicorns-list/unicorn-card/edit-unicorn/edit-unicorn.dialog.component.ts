import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Unicorn} from '../../../../unicorn.model';

@Component({
    selector: 'uni-edit-unicorn',
    templateUrl: './edit-unicorn.dialog.component.html',
    styleUrls: ['./edit-unicorn.dialog.component.css']
})
export class EditUnicornDialogComponent {

    public unicorn: Unicorn = this.data.unicorn;

    constructor(@Inject(MAT_DIALOG_DATA) private data: any,
                private dialogRef: MatDialogRef<EditUnicornDialogComponent>) {
    }

    public close() {
        this.dialogRef.close(this.unicorn);
    }

}
