import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  contactForm: FormGroup;
  courses = [
    {
      image: '/assets/oficina.webp',
      alt: 'Redes sociales imagen',
      h5: 'Redes sociales',
      p: "<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='#666666' viewBox='0 0 256 256' class='me-1'><rect width='256' height='256' fill='none'></rect><circle cx='128' cy='128' r='34' fill='none' stroke='#666666' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'></circle><rect x='32' y='32' width='192' height='192' rx='48' fill='none' stroke='#666666' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'></rect><circle cx='180' cy='76' r='16'></circle></svg>medio_punto_amigurumi<br /><svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='#666666' viewBox='0 0 256 256' class='me-1'><rect width='256' height='256' fill='none'></rect><circle cx='128' cy='128' r='96' fill='none' stroke='#666666' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'></circle><path d='M168,88H152a23.9,23.9,0,0,0-24,24V224' fill='none' stroke='#666666' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'></path><line x1='96' y1='144' x2='160' y2='144' fill='none' stroke='#666666' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'></line></svg>Daniela Guiffrey",
    },
    {
      image: '/assets/email.webp',
      alt: 'email imagen',
      h5: 'Email',
      p: 'mediopuntoamigurumi@gmail.com',
    },
    {
      image: '/assets/ubicacion.webp',
      alt: 'ubicación imagen',
      h5: 'Ubicación',
      p: 'Villa Elisa, Entre Riós, Argentina',
    },
  ];
  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }

  async onSubmit(e: Event) {
    if (!this.contactForm.valid) {
      return;
    }

    e.preventDefault();

    try {
      await emailjs.sendForm(
        environment.service,
        environment.template,
        e.target as HTMLFormElement,
        environment.apiKey
      );

      Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado correctamente',
        timer: 3500,
        showConfirmButton: false,
      });
    } catch (error: any) {
      console.log(error.text);

      Swal.fire({
        icon: 'warning',
        title: 'No se pudo enviar el mensaje',
        timer: 3500,
        showConfirmButton: false,
      });
    }
    this.contactForm.reset();
  }
}
