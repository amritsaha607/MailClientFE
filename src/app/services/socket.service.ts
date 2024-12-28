import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socketHost: string = 'localhost:8000';
  socketEndpoint: string = '/ws/mail/';

  socket!: WebSocket;

  constructor() {}

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
      alert('Received event: ' + event);
    };
  }

  send(message: string) {
    this.socket.send(message);
  }
}
