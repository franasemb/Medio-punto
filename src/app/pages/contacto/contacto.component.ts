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
