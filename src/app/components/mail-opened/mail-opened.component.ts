import { Component, Input } from '@angular/core';
import { Mail } from '../../../types';
import { RenderMailContentPipe } from '../../pipes/render/render-mail-content.pipe';

@Component({
  selector: 'app-mail-opened',
  standalone: true,
  imports: [RenderMailContentPipe],
  templateUrl: './mail-opened.component.html',
  styleUrl: './mail-opened.component.scss',
})
export class MailOpenedComponent {
  @Input() mail!: Mail;
}
