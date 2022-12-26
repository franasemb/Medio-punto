import { Component} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import {
  Firestore,
  collection,
  addDoc,
} from '@angular/fire/firestore';
import 'firebase/firestore';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent  {
  contactForm: FormGroup;

  constructor(private firestore: Firestore) {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }


  async onSubmit() {
    if (this.contactForm.valid) {
      await addDoc(collection(this.firestore, 'contacto'), {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message,
      })
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado correctamente',
            timer: 3500,
            showConfirmButton: false,
          });
          this.contactForm.reset();
        })
        .catch((e) => {
          console.log(e);
          Swal.fire({
            icon: 'warning',
            title: 'No se pudo enviar el mensaje',
            timer: 3500,
            showConfirmButton: false,
          });
        });
    } else {
      return;
    }
  }
  resetFormulario() {
    this.contactForm.reset();
  }
}
