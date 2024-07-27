import { Injectable } from '@angular/core';
import { Mail } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class StaticMailsService {
  mails: Mail[] = [
    {
      subject: 'Sample subject here',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      sender: {
        name: 'John D',
        email: 'jonathon.d@email.com',
      },
      time: new Date(),
    },
    {
      subject: 'Just checking on you',
      sender: {
        name: 'Robert',
        email: 'robert.sample@email.com',
      },
      content: 'Hey Amrit. How are you. Thanks, Robert',
      time: new Date(),
    },
    {
      subject: 'Check your portfolio health',
      sender: {
        name: 'INDMoney',
        email: 'indmoney@coolmail.com',
      },
      content: 'Your portfolio scan is here. Have a look',
      time: new Date(),
    },
    {
      subject: 'Just checking on you',
      sender: {
        name: 'Robert',
        email: 'robert.sample@email.com',
      },
      content: 'Hey Amrit. How are you. Thanks, Robert',
      time: new Date(),
    },
    {
      subject: 'Check your portfolio health',
      sender: {
        name: 'INDMoney',
        email: 'indmoney@coolmail.com',
      },
      content: 'Your portfolio scan is here. Have a look',
      time: new Date(),
    },
    {
      subject: 'Just checking on you',
      sender: {
        name: 'Robert',
        email: 'robert.sample@email.com',
      },
      content: 'Hey Amrit. How are you. Thanks, Robert',
      time: new Date(),
    },
    {
      subject: 'Check your portfolio health',
      sender: {
        name: 'INDMoney',
        email: 'indmoney@coolmail.com',
      },
      content: 'Your portfolio scan is here. Have a look',
      time: new Date(),
    },
    {
      subject: 'Just checking on you',
      sender: {
        name: 'Robert',
        email: 'robert.sample@email.com',
      },
      content: 'Hey Amrit. How are you. Thanks, Robert',
      time: new Date(),
    },
    {
      subject: 'Check your portfolio health',
      sender: {
        name: 'INDMoney',
        email: 'indmoney@coolmail.com',
      },
      content: 'Your portfolio scan is here. Have a look',
      time: new Date(),
    },
    {
      subject: 'Just checking on you',
      sender: {
        name: 'Robert',
        email: 'robert.sample@email.com',
      },
      content: 'Hey Amrit. How are you. Thanks, Robert',
      time: new Date(),
    },
    {
      subject: 'Check your portfolio health',
      sender: {
        name: 'INDMoney',
        email: 'indmoney@coolmail.com',
      },
      content: 'Your portfolio scan is here. Have a look',
      time: new Date(),
    },
  ];

  constructor() {}

  getStaticMails() {
    return this.mails;
  }
}
