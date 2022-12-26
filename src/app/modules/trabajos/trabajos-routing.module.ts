import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { TrabajosComponent } from 'src/app/components/trabajos/trabajos.component';

const routes: Routes = [
  {
    path: '',
    component: TrabajosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrabajosRoutingModule {}
