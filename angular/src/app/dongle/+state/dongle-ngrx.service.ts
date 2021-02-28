import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { DONGLE_STATE_KEY, DongleState } from './dongle.reducer';
import { Observable } from 'rxjs';
import { selectFeature } from './dongle.selectors';

@Injectable({
  providedIn: 'root'
})
export class DongleNgrxService {
  private rootState$: Observable<DongleState> = this.store.select(DONGLE_STATE_KEY);

  constructor(private store: Store<{ dongle: DongleState }>) {}

  public getState(): Observable<DongleState> {
    return this.store.select(selectFeature);
  }
}
