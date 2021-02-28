import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { messageReceived } from '../../messaging/+state/messaging.actions';
import { filter, map } from 'rxjs/operators';
import { getStatusResponse } from './dongle.actions';

@Injectable()
export class DongleEffects {
  constructor(private actions$: Actions, private store: Store) {}

  statusResponse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(messageReceived),
      map(action => action.message),
      filter(message => !!message.deviceStatusResponse),
      map(message =>
        getStatusResponse(
          message.deviceStatusResponse.device.status === 'connected'
            ? { status: 'connected' }
            : { status: 'disconnected' }
        )
      )
    )
  );
}
