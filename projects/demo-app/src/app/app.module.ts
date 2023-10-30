import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NpmlibInputModule } from 'npmlib-input';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NpmlibInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
