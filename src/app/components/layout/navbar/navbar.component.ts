import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navbar = [
    { name: 'Inicio', link: '/' },
    { name: 'Trabajos', link: '/trabajos' },
    { name: 'Contacto', link: '/contacto' },
  ];
}
