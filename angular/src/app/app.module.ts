import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagingModule } from './messaging/messaging.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MessagingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
