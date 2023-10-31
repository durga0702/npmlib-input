import { NgModule } from '@angular/core';
import { NpmlibInputComponent } from './npmlib-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NpmlibInputComponent
  ],
  imports: [
    FormsModule,
  ],
  exports: [
    NpmlibInputComponent
  ]
})
export class NpmlibInputModule { }
