import { Component } from '@angular/core';
import { Mail } from '../../../types';
import { MailLineComponent } from '../../components/mail-line/mail-line.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MailLineComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  openMailContent(mail: Mail) {
    console.log(`Opening email ${mail}`);
  }
}
