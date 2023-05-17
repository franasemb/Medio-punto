import { Component } from '@angular/core';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css'],
})
export class TrabajosComponent {
  filtroActual = 'todos';
  images = [
    {
      id: 1,
      category: 'conejos',
      url: [
        '/assets/trabajos/conejos/coneja-naranja-1.webp',
        '/assets/trabajos/conejos/coneja-naranja-2.webp',
        '/assets/trabajos/conejos/coneja-naranja-3.webp',
      ],
      title: 'Coneja naranja',
      alt: 'Amigurumi conejo naranja',
    },

    {
      id: 2,
      category: 'conejos',
      url: [
        '/assets/trabajos/conejos/coneja-rosada-2.webp',
        '/assets/trabajos/conejos/coneja-rosada-3.webp',
        '/assets/trabajos/conejos/coneja-rosada-1.webp',
      ],
      title: 'Coneja rosada',
      alt: 'Amigurumi coneja rosada',
    },
    {
      id: 3,
      category: 'conejos',
      url: [
        '/assets/trabajos/conejos/coneja-rosada-chenille-3.webp',
        '/assets/trabajos/conejos/coneja-rosada-chenille-1.webp',
        '/assets/trabajos/conejos/coneja-rosada-chenille-2.webp',
      ],
      title: 'Coneja rosada confeccionada en chenille',
      alt: 'Amigurumi coneja rosada',
    },
    {
      id: 4,
      category: 'conejos',
      url: [
        '/assets/trabajos/conejos/conejo-aguamarina-1.webp',
        '/assets/trabajos/conejos/conejo-aguamarina-2.webp',
        '/assets/trabajos/conejos/conejo-aguamarina-3.webp',
      ],
      title: 'Conejo aguamarina',
      alt: 'Amigurumi conejo aguamarina',
    },
    {
      id: 5,
      category: 'conejos',
      url: [
        '/assets/trabajos/conejos/conejo-amarillo-2.webp',
        '/assets/trabajos/conejos/conejo-amarillo-3.webp',
        '/assets/trabajos/conejos/conejo-amarillo-1.webp',
      ],
      title: 'conejo amarillo',
      alt: 'Amigurumi conejo amarillo',
    },
    {
      id: 6,
      category: 'conejos',
      url: [
        '/assets/trabajos/conejos/conejo-azul-3.webp',
        '/assets/trabajos/conejos/conejo-azul-1.webp',
        '/assets/trabajos/conejos/conejo-azul-2.webp',
      ],
      title: 'Conejo azul',
      alt: 'Amigurumi conejo azul',
    },
    {
      id: 7,
      category: 'conejos',
      url: [
        '/assets/trabajos/conejos/conejo-bordo-1.webp',
        '/assets/trabajos/conejos/conejo-bordo-2.webp',
        '/assets/trabajos/conejos/conejo-bordo-3.webp',
      ],
      title: 'Conejo bordo',
      alt: 'Amigurumi conejo bordo',
    },
    {
      id: 8,
      category: 'conejos',
      url: [
        '/assets/trabajos/conejos/conejo-rojo-2.webp',
        '/assets/trabajos/conejos/conejo-rojo-3.webp',
        '/assets/trabajos/conejos/conejo-rojo-1.webp',
      ],
      title: 'Conejo rojo',
      alt: 'Amigurumi conejo rojo',
    },
    {
      id: 9,
      category: 'conejos',
      url: [
        '/assets/trabajos/conejos/conejo-verde-3.webp',
        '/assets/trabajos/conejos/conejo-verde-2.webp',
        '/assets/trabajos/conejos/conejo-verde-1.webp',
      ],
      title: 'Conejo verde',
      alt: 'Amigurumi conejo verde',
    },
    {
      id: 10,
      category: 'dinosaurios',
      url: [
        '/assets/trabajos/dinosaurios/dinosaurio-1.webp',
        '/assets/trabajos/dinosaurios/dinosaurio-2.webp',
        '/assets/trabajos/dinosaurios/dinosaurio-3.webp',
      ],
      title: 'Dinosaurio',
      alt: 'Amigurumi dinosaurio',
    },
    {
      id: 11,
      category: 'pulpos',
      url: [
        '/assets/trabajos/pulpos/pulpo-azul-blanco-2.webp',
        '/assets/trabajos/pulpos/pulpo-azul-blanco-1.webp',
        '/assets/trabajos/pulpos/pulpo-azul-blanco-3.webp',
      ],
      title: 'Pulpo de apego azul y blanco',
      alt: 'Amigurumi conejo pulpo de apego',
    },
    {
      id: 12,
      category: 'pulpos',
      url: [
        '/assets/trabajos/pulpos/pulpo-violeta-3.webp',
        '/assets/trabajos/pulpos/pulpo-violeta-1.webp',
        '/assets/trabajos/pulpos/pulpo-violeta-2.webp',
      ],
      title: 'Pulpo de apego violeta',
      alt: 'Amigurumi pulpo violeta',
    },
    {
      id: 13,
      category: 'pulpos',
      url: [
        '/assets/trabajos/pulpos/manta-1.webp',
        '/assets/trabajos/pulpos/manta-2.webp',
        '/assets/trabajos/pulpos/manta-3.webp',
      ],
      title: 'Manta de apego',
      alt: 'Amigurumi manta de apego',
    },
    {
      id: 14,
      category: 'osos',
      url: [
        '/assets/trabajos/osos/osa-violeta-2.webp',
        '/assets/trabajos/osos/osa-violeta-1.webp',
        '/assets/trabajos/osos/osa-violeta-3.webp',
      ],
      title: 'Osa violeta',
      alt: 'Amigurumi oso violeta',
    },
    {
      id: 15,
      category: 'osos',
      url: [
        '/assets/trabajos/osos/oso-verde-3.webp',
        '/assets/trabajos/osos/oso-verde-2.webp',
        '/assets/trabajos/osos/oso-verde-1.webp',
      ],
      title: 'Oso verde',
      alt: 'Amigurumi oso verde',
    },
    {
      id: 16,
      category: 'personajes',
      url: [
        '/assets/trabajos/stitch/stitch-1.webp',
        '/assets/trabajos/stitch/stitch-2.webp',
        '/assets/trabajos/stitch/stitch-3.webp',
      ],
      title: 'Stitch',
      alt: 'Amigurumi Stitch',
    },
    {
      id: 17,
      category: 'unicornios',
      url: [
        '/assets/trabajos/unicornio/unicornio-2.webp',
        '/assets/trabajos/unicornio/unicornio-1.webp',
        '/assets/trabajos/unicornio/unicornio-3.webp',
      ],
      title: 'Unicornio',
      alt: 'Amigurumi unicornio',
    },
    {
      id: 18,
      category: 'pulpos',
      url: [
        '/assets/trabajos/pulpos/portalapices-3.webp',
        '/assets/trabajos/pulpos/portalapices-2.webp',
        '/assets/trabajos/pulpos/portalapices-1.webp',
      ],
      title: 'Portalapices',
      alt: 'Amigurumi portalapices',
    },
    {
      id: 19,
      category: 'pulpos',
      url: [
        '/assets/trabajos/pulpos/pulpo-azul-1.webp',
        '/assets/trabajos/pulpos/pulpo-azul-2.webp',
        '/assets/trabajos/pulpos/pulpo-azul-3.webp',
      ],
      title: 'Pulpo de apego azul',
      alt: 'Amigurumi pulpo de apego azul',
    },
    {
      id: 20,
      category: 'conejos',
      url: [
        '/assets/trabajos/conejos/conejo-largo-azul-2.webp',
        '/assets/trabajos/conejos/conejo-largo-azul-3.webp',
        '/assets/trabajos/conejos/conejo-largo-azul-1.webp',
      ],
      title: 'Conejo azul',
      alt: 'Amigurumi conejo azul',
    },
    {
      id: 21,
      category: 'dinosaurios',
      url: [
        '/assets/trabajos/dinosaurios/Dinosaurio-verde-2.webp',
        '/assets/trabajos/dinosaurios/Dinosaurio-verde-3.webp',
      ],
      title: 'Dinosaurio verde',
      alt: 'Amigurumi dinosaurio',
    },
  ];

  navItem = [
    { id: 'todos', text: 'Todos los amigurumis' },
    { id: 'pulpos', text: 'Pulpos de apego' },
    { id: 'dinosaurios', text: 'Dinosaurios' },
    { id: 'personajes', text: 'Personajes' },
    { id: 'unicornios', text: 'Unicornios' },
    { id: 'conejos', text: 'Conejos' },
    { id: 'osos', text: 'Osos' },
  ];

  modaltitle = '';
  modalAlt = '';
  modalUrl = [''];
  modalId = '';

  filtrarImagenes(filtro: string) {
    this.filtroActual = filtro;
  }

  openModal(id: number) {
    const image = this.images.find((i) => i.id === id);

    if (image) {
      this.modaltitle = image.title;
      this.modalUrl = image.url;
      this.modalId = 'exampleModal' + image.id;
      this.modalAlt = image.alt;
    }
  }
}
