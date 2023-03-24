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
      url: 'assets/pulpos-modelos.webp',
    },
    {
      name: 'Conejos',
      url: 'assets/coneja-modelos.webp',
    },
    {
      name: 'Osos',
      url: 'assets/osos-modelo.webp',
    },
  ];
}
