import { Component } from '@angular/core';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.css'],
})
export class ModelosComponent {
  modelos = [
    {
      name: 'Pulpos',
      alt: 'Amigurumis pulpos',
      url: '/assets/trabajos/pulpos/pulpo-azul-blanco-2.webp',
    },
    {
      name: 'Osos',
      alt: 'Amigurumis osos',
      url: '/assets/trabajos/osos/osa-violeta-2.webp',
    },
    {
      name: 'Conejos',
      alt: 'Amigurumis conejos',
      url: '/assets/trabajos/conejos/conejo-verde-3.webp',
    },
  ];
}
