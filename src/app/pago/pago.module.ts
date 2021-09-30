import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagoComponent } from './pago.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PagoComponent],
  exports:[PagoComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PagoModule { }
