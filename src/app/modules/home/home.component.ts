import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Mail } from '../../../types';
import { MailLineComponent } from '../../components/mail-line/mail-line.component';
import { MailOpenedComponent } from '../../components/mail-opened/mail-opened.component';
import { StaticMailsService } from '../../services/static-mails.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MailLineComponent, CommonModule, MailOpenedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  selectedMail!: Mail;
  mails: Mail[] = [];

  constructor(private staticMailsService: StaticMailsService) {}

  ngOnInit() {
    this.mails = this.staticMailsService.getStaticMails();
  }

  openMailContent(mail: Mail) {
    this.selectedMail = mail;
  }
}
