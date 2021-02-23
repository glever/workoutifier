import { Component, OnInit } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';
import { DeviceStatusRequestMsg } from '@glever/workoutifier-model';

@Component({
  selector: 'app-messaging',
  template: `
    <div id="messages">
      <button class="btn btn-primary" (click)="onSendMessage()">Send Test Message</button>
      <h2>Received messages</h2>
      <ol>
        <!-- we will use Angular binding to populate list of messages -->
        <li class="message" *ngFor="let message of receivedMessages">{{message}}</li>
      </ol>
    </div>

  `,
  styles: []
})
export class MessagingComponent implements OnInit {
  public receivedMessages: string[] = [];

  constructor(private rxStompService: RxStompService) {
  }

  ngOnInit() {
    this.rxStompService.watch('/queue/greetings').subscribe((message: Message) => {
      console.log('received from queue');
      this.receivedMessages.push(message.body);
    });
    this.rxStompService.watch('/topic/greetings').subscribe((message: Message) => {
      console.log('received from topic');
      this.receivedMessages.push(message.body);
    });
  }

  onSendMessage() {
    const message = {type: "DeviceStatusRequestMsg"} as DeviceStatusRequestMsg;
    this.rxStompService.publish({ destination: '/app/hello', body: JSON.stringify(message) });
  }
}
