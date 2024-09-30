import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mail-componse-popup',
  standalone: true,
  imports: [],
  templateUrl: './mail-componse-popup.component.html',
  styleUrl: './mail-componse-popup.component.scss',
})
export class MailComponsePopupComponent {
  @Input() popupId: number = 0;
  @Output() close = new EventEmitter<number>();

  send() {
    this.closePopup();
  }

  closePopup() {
    this.close.emit(this.popupId);
  }
}
