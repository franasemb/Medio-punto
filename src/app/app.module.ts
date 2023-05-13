import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgOptimizedImage } from '@angular/common';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';

import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { AboutComponent } from './components/about/about.component';
import { ModelosComponent } from './components/modelos/modelos.component';
import { CaracteristicasComponent } from './components/caracteristicas/caracteristicas.component';

import { HomeComponent } from './pages/home/home.component';
import { GoToTopComponent } from './components/go-to-top/go-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ModelosComponent,
    FooterComponent,
    CaracteristicasComponent,
    GoToTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    NgxPageScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
