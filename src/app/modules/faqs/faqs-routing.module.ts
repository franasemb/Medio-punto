import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreguntasComponent } from 'src/app/components/preguntas/preguntas.component';

const routes: Routes = [
  {
    path: '',
    component: PreguntasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaqsRoutingModule {}
