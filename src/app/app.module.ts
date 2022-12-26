import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSmoothScrollModule } from '@boatzako/ngx-smooth-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ModelosComponent } from './components/modelos/modelos.component';
import { FooterComponent } from './components/footer/footer.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ModelosComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSmoothScrollModule,
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyB8rb5hZkRQVn7oI7GNhR9-Jtrvhf0NSqM',
        authDomain: 'contacto-be629.firebaseapp.com',
        projectId: 'contacto-be629',
        storageBucket: 'contacto-be629.appspot.com',
        messagingSenderId: '1010788973027',
        appId: '1:1010788973027:web:d72deb3b75dba6495b08d6',
        measurementId: 'G-1GK8DKL9YE',
      })
    ),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
