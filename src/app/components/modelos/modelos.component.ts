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
      url: 'assets/trabajos/pulpos/pulpo-azul-blanco-2.webp',
    },
    {
      name: 'Osos',
      url: 'assets/trabajos/osos/osa-violeta-2.webp',
    },
    {
      name: 'Conejos',
      url: 'assets/trabajos/conejos/conejo-verde-3.webp',
    },
  ];
}
