import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { DongleState } from '../+state/dongle.reducer';
import { Observable } from 'rxjs';
import { DongleNgrxService } from '../+state/dongle-ngrx.service';

@Component({
  selector: 'app-dongle',
  template: `
    <div>dongle status: {{ (this.dongleNgrxService.getState() | async).status | json }}</div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DongleComponent implements OnInit {
  constructor(public dongleNgrxService: DongleNgrxService) {}

  ngOnInit(): void {}
}
