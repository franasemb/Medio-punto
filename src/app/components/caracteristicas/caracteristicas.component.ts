import { Component } from '@angular/core';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css'],
})
export class CaracteristicasComponent {
  caracteristicas = [
    {
      url: '/assets/Pollen%20Allergy-bro.svg',
      alt: 'bola de hilo card',
      name: 'Hilo hipoalergénico',
      description:
        'Utilizo hilos que son 100% hipoalergénicos para la confección de mis productos, lo que significa que son menos propensos a causar una reacción alérgica en comparación con otros tipos de hilos.',
    },
    {
      url: '/assets/Eyes-bro.svg',
      alt: 'ojo card',
      name: 'Ojitos de seguridad',
      description:
        'Para los ojos de los amigurumis que confecciono, utilizo ojos de seguridad que cuentan con un mecanismo de seguridad en la parte posterior que previene que los ojos se salgan de su lugar.',
    },
    {
      url: '/assets/Sales%20consulting-bro.svg',
      alt: 'modelo card',
      name: 'Diferentes modelos',
      description:
        'Puedes elegir entre los modelos de amigurumis que realizo. Si encuentras uno que te gusta, solo necesitas enviarme una foto y juntos podremos discutir los detalles, como el tamaño, el color, el tiempo de entrega y el precio.',
    },
  ];
}
