import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
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
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'trabajos',
    loadChildren: () =>
      import('../app/modules/trabajos/trabajos.module').then(
        (m) => m.TrabajosModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
