import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OctaoceanModule } from './octaocean/octaocean.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OctaoceanModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
