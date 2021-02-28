import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagingComponent } from './messaging/messaging.component';
import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';
import { myRxStompConfig } from './my-rx-stomp.config';
import { StoreModule } from "@ngrx/store";
import { MESSAGING_STATE_KEY, messagingReducer } from "./+state/messaging.reducers";

@NgModule({
  declarations: [MessagingComponent],
  exports: [MessagingComponent],
  imports: [CommonModule, StoreModule.forFeature(MESSAGING_STATE_KEY, messagingReducer)],
  providers: [
    {
      provide: InjectableRxStompConfig,
      useValue: myRxStompConfig
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig]
    }
  ]
})
export class MessagingModule {
}
