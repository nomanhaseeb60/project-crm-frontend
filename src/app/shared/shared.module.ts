import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from './material/material.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
  ],
  exports: [
    SpinnerComponent
  ]
})
export class SharedModule { }
