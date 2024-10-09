import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { ComposeMailPayload } from '../../../types';

@Component({
  selector: 'app-mail-componse-popup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mail-componse-popup.component.html',
  styleUrl: './mail-componse-popup.component.scss',
})
export class MailComponsePopupComponent {
  receiversList: string = '';
  payload: ComposeMailPayload = {
    id: '',
    sender: '',
    receivers: [],
    subject: '',
    content: '',
    timestamp: new Date(),
  };

  @Input() popupId: number = 0;
  @Output() sendMailEmitter = new EventEmitter<ComposeMailPayload>();
  @Output() close = new EventEmitter<number>();

  send() {
    this.payload.id = uuidv4();
    this.payload.timestamp = new Date();
    this.payload.receivers = this.receiversList.split(',');
    this.sendMailEmitter.emit(this.payload);
    // this.closePopup();
  }

  closePopup() {
    this.close.emit(this.popupId);
  }
}
