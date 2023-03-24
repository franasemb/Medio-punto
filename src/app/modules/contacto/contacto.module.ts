import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from 'src/app/pages/contacto/contacto.component';

@NgModule({
  declarations: [ContactoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ContactoRoutingModule,
  ],
})
export class ContactoModule {}
