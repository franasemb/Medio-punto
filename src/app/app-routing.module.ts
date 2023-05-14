import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contacto',
    loadChildren: () =>
      import('../app/modules/contacto/contacto.module').then(
        (m) => m.ContactoModule
      ),
  },
  {
    path: 'faq',
    loadChildren: () =>
      import('../app/modules/faqs/faqs.module').then((m) => m.FaqsModule),
  },

  {
    path: 'trabajos',
    loadChildren: () =>
      import('../app/modules/trabajos/trabajos.module').then(
        (m) => m.TrabajosModule
      ),
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
