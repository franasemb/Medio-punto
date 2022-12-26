import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() title = ' ';
  @Input() imagen1 = ' ';
  @Input() imagen2 = ' ';
  @Input() imagen3 = ' ';

  public show = false;
  modalShow() {
    this.show = true;
  }
  modalHide() {
    this.show = false;
  }
 
}
