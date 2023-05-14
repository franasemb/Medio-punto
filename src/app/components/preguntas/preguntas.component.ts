import { Component } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css'],
})
export class PreguntasComponent {
  collapses = [
    {
      id: 1,
      title: '¿Qué son los amigurumis?',
      description:
        'Los amigurumis son muñecos tejidos a mano con lana o hilo, originarios de Japón. Estos muñecos suelen tener forma de animales, objetos o personajes de dibujos animados.',
    },
    {
      id: 2,
      title: '¿Cómo puedo hacer un pedido?',
      description:
        'Para hacer un pedido, puedes enviarme un mensaje a través del <a href="/contacto" class="accordion-link">formulario de contacto</a> o <a href="https://www.instagram.com/mediopuntoamigurumi/" class="accordion-link">mediante mi instagram.</a> Después de discutir los detalles de tu pedido, te proporcionaré un presupuesto y un plazo de entrega.',
    },
    {
      id: 3,
      title: '¿Cómo es mi forma de trabajo?',
      description:
        'Cuento con stock limitado, lo voy reponiendo a medida que se va vendiendo.<br/> Podes consultar el stock o ver <a href="https://www.instagram.com/mediopuntoamigurumi/" class="accordion-link">mis historias destacadas</a> con el nombre de "Disponibles".',
    },
    {
      id: 4,
      title: '¿A partir de qué edad se pueden usar los amigurumis?',
      description:
        'Los amigurumis son aptos para <strong>todas</strong> las edades.',
    },
    {
      id: 5,
      title: '¿Cómo debo lavar mi amigurumi?',
      description:
        'Los amigurimis deben ser lavados a <strong>mano</strong> con agua <strong>fría</strong> y jabón líquido. <br /> No usar jabón en polvo ni blanqueador ya que puede hacer que tu amigurumi se decolore.',
    },
  ];
}
