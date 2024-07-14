import { Injectable } from '@angular/core';
import { Mail } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class StaticMailsService {
  mails: Mail[] = [
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
