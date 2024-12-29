import { Injectable } from '@angular/core';
import { Mail } from '../../types';
import { MailsService } from './mails.service';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socketHost: string = 'localhost:8000';
  socketEndpoint: string = '/ws/mail/';

  socket!: WebSocket;

  constructor(private mailsService: MailsService) {}

  initializeSocket(socket_id: string) {
    this.socket = new WebSocket(
      `ws://${this.socketHost}${this.socketEndpoint}${socket_id}`
    );

    this.socket.onopen = (event) => {
      this.socket.send(
        JSON.stringify({
          mode: 'boot',
        })
      );
    };

    this.socket.onmessage = (event) => {
      this.sendPrependEmailRequest(event.data);
    };
  }

  send(message: string) {
    this.socket.send(message);
  }

  sendPrependEmailRequest(emailData: string) {
    const emailJson = JSON.parse(emailData);

    const mail: Mail = {
      subject: emailJson.subject,
      sender: {
        name: emailJson.sender_name,
        email: emailJson.sender_email,
      },
      timestamp: new Date(emailJson.sent_at),
    };

    this.mailsService.prependNewEmail(mail);
  }
}
