import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MESSAGING_STATE_KEY, MessagingState } from './messaging.reducers';
import { Message } from '@stomp/stompjs';
import { RxStompService } from '@stomp/ng2-stompjs';
import { connectionStateChange, messageReceived } from './messaging.actions';
import { selectFeature, selectIsConnected, selectIsDisConnected } from './messaging.selectors';
import { ApiMsg } from '@glever/workoutifier-model';

@Injectable({
  providedIn: 'root'
})
export class MessagingNgrxService {
  private rootState$: Observable<MessagingState> = this.store.select(MESSAGING_STATE_KEY);

  constructor(private store: Store<{ messaging: MessagingState }>, private rxStompService: RxStompService) {}

  public getState(): Observable<MessagingState> {
    return this.store.select(selectFeature);
  }

  public isConnected() {
    return this.store.select(selectIsConnected);
  }

  public isDisConnected() {
    return this.store.select(selectIsDisConnected);
  }

  disConnect() {
    this.rxStompService.deactivate();
  }

  connect() {
    this.rxStompService.watch('/queue/greetings').subscribe((message: Message) => {
      console.log('received from queue');
      this.store.dispatch(messageReceived({ message: JSON.parse(message.body) as ApiMsg }));
    });

    this.rxStompService.watch('/topic/greetings').subscribe((message: Message) => {
      console.log('received from topic');
      this.store.dispatch(messageReceived({ message: JSON.parse(message.body) as ApiMsg }));
    });
    this.store.dispatch(connectionStateChange({ status: 'connected' }));
  }

  sendMessage(msg: ApiMsg) {
    this.rxStompService.publish({ destination: '/app/hello', body: JSON.stringify(msg) });
  }
}
