import { Component, Input } from '@angular/core';
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
}
