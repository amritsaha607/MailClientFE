import { Component, Input } from '@angular/core';
import { Mail } from '../../../types';

@Component({
  selector: 'app-mail-opened',
  standalone: true,
  imports: [],
  templateUrl: './mail-opened.component.html',
  styleUrl: './mail-opened.component.scss',
})
export class MailOpenedComponent {
  @Input() mail!: Mail;
}
