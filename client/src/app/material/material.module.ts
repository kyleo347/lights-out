import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatListModule, MatButtonModule, MatDialogModule, MatSelectModule, MatGridListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatGridListModule,
  ],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatGridListModule,
  ],
  declarations: []
})
export class MaterialModule { }
