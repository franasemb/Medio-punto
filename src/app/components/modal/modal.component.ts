import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() url: Array<string> = [''];
  @Input() alt: string = '';
}
