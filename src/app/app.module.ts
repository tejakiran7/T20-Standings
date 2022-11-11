import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { T20ServiceService } from './t20-service.service';
import { TeamStandings } from './team-standings/team-standings.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TeamStandings
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [T20ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
