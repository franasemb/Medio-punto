import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabajosRoutingModule } from './trabajos-routing.module';
import { TrabajosComponent } from 'src/app/components/trabajos/trabajos.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@NgModule({
  declarations: [TrabajosComponent, ModalComponent],
  imports: [CommonModule, TrabajosRoutingModule],
})
export class TrabajosModule {}
