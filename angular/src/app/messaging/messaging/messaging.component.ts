import { Component, OnInit } from '@angular/core';
import { ApiMsg } from '@glever/workoutifier-model';
import { MessagingNgrxService } from '../+state/messaging-ngrx.service';

@Component({
  selector: 'app-messaging',
  template: `
    <h1>Messaging</h1>
    <div id="messages">
      Messaging state: {{ (this.messagingNgrxService.getState() | async).connectionState }}
      <button *ngIf="this.messagingNgrxService.isConnected() | async" (click)="disconnect()">Disconnect</button>
      <button *ngIf="this.messagingNgrxService.isDisConnected() | async" (click)="connect()">Connect</button>
      <button class="btn btn-primary" (click)="onSendMessage()">Send Test Message</button>
      <h2>Received messages</h2>
      <ol>
        <!-- we will use Angular binding to populate list of messages -->
        <li class="message" *ngFor="let message of receivedMessages">{{ message }}</li>
      </ol>
    </div>
  `,
  styles: []
})
export class MessagingComponent implements OnInit {
  public receivedMessages: string[] = [];

  constructor(public messagingNgrxService: MessagingNgrxService) {}

  ngOnInit() {
    // this.rxStompService.watch('/queue/greetings').subscribe((message: Message) => {
    //   console.log('received from queue');
    //   this.receivedMessages.push(message.body);
    // });
    // this.rxStompService.watch('/topic/greetings').subscribe((message: Message) => {
    //   console.log('received from topic');
    //   this.receivedMessages.push(message.body);
    // });
  }

  onSendMessage() {
    const message = { request: 'DeviceStatus' } as ApiMsg;
    this.messagingNgrxService.sendMessage(message);
  }

  connect() {
    this.messagingNgrxService.connect();
  }

  disconnect() {
    this.messagingNgrxService.disConnect();
  }
}
