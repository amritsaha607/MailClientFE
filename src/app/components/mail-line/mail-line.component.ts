import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mail } from '../../../types';

@Component({
  selector: 'app-mail-line',
  standalone: true,
  imports: [],
  templateUrl: './mail-line.component.html',
  styleUrl: './mail-line.component.scss',
})
export class MailLineComponent {
  @Input() mail!: Mail;
  @Output() open: EventEmitter<Mail> = new EventEmitter<Mail>();

  openMailContent() {
    this.open.emit(this.mail);
  }
}
