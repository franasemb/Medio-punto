import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqsRoutingModule } from './faqs-routing.module';
import { PreguntasComponent } from 'src/app/components/preguntas/preguntas.component';

@NgModule({
  declarations: [PreguntasComponent],
  imports: [CommonModule, FaqsRoutingModule],
})
export class FaqsModule {}
