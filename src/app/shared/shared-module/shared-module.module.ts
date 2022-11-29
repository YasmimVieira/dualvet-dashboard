import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    SpinnerComponent
  ]
})
export class SharedModuleModule { }
