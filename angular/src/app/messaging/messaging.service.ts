import { Injectable } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';

@Injectable()
export class StompMessagingService {
  constructor(private rxStompService: RxStompService) {
  }


}
