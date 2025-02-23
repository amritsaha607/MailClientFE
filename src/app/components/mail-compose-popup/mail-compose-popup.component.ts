import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { ComposeMailPayload } from '../../../types';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-mail-compose-popup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mail-compose-popup.component.html',
  styleUrl: './mail-compose-popup.component.scss',
})
export class MailComposePopupComponent {
  receiversList: string = '';
  payload: ComposeMailPayload = {
    id: '',
    sender: '',
    receivers: [],
    subject: '',
    content: '',
    timestamp: new Date(),
  };
  mailSuggestions: string[] = [];

  @Input() popupId: number = 0;
  @Output() sendMailEmitter = new EventEmitter<[number, ComposeMailPayload]>();
  @Output() close = new EventEmitter<number>();

  constructor(private userService: UsersService) {}

  send() {
    this.payload.id = uuidv4();
    this.payload.timestamp = new Date();
    this.payload.receivers = this.receiversList
      .split(',')
      .map((receiver) => receiver.trim());
    this.sendMailEmitter.emit([this.popupId, this.payload]);
  }

  closePopup() {
    this.close.emit(this.popupId);
  }

  suggestRecipients() {
    const lastTypedReciever = this.receiversList.split(',').at(-1);
    if (lastTypedReciever == undefined || lastTypedReciever?.length <= 3) {
      return;
    }

    this.userService
      .fetchEmailListByQuery(lastTypedReciever)
      .subscribe((response) => {
        if (response.status == 200) {
          console.log(response.body);

          const suggestedEmails = response.body?.emails;
          if (suggestedEmails == undefined || suggestedEmails.length == 0) {
            return;
          }

          this.mailSuggestions = suggestedEmails;
        }
      });
  }
}
