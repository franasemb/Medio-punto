import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navbar = [
    { name: 'Inicio', link: '', fragment: 'inicio' },
    { name: 'Trabajos', link: '/trabajos', fragment: 'trabajos' },
    { name: 'Contacto', link: '/contacto', fragment: 'contact' },
  ];
}
