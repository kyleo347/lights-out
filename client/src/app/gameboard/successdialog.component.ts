import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-success-dialog',
    template: `
    <div mat-dialog-content>
        <p>{{data}}</p>
    </div>
    <div mat-dialog-actions>
        <button mat-button (click)="onClick()">OK</button>
    </div>
    `,
    styles: [`p{text-align: center} button{margin: 0 auto}`]
  })

export class SuccessDialogComponent {


    constructor( public dialogRef: MatDialogRef<SuccessDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: string ) {}

    onClick(): void {
        this.dialogRef.close();
    }

}
