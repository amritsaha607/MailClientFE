import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mail } from '../../../types';
import { DateToStringPipe } from '../../pipes/date/date-to-string.pipe';

@Component({
  selector: 'app-mail-line',
  standalone: true,
  imports: [DateToStringPipe],
  templateUrl: './mail-line.component.html',
  styleUrl: './mail-line.component.scss',
})
export class MailLineComponent {
  @Input() mail: Mail = {
    subject: 'subject',
    sender: {
      name: 'Sample',
      email: 'email',
    },
    time: new Date(),
  };
  @Output() open: EventEmitter<Mail> = new EventEmitter<Mail>();

  openMailContent() {
    this.open.emit(this.mail);
  }
}
