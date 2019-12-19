import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpService} from './http.service'; //add this
import {HttpClientModule} from '@angular/common/http'; //add this

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GridComponent } from './grid/grid.component';
import { PlayerComponent } from './player/player.component';
import { Story1Component } from './story1/story1.component';
import { Story2Component } from './story2/story2.component';
import { Story3Component } from './story3/story3.component';
import { Story4Component } from './story4/story4.component';
import { Story5Component } from './story5/story5.component';
import { Story6Component } from './story6/story6.component';
import { Story7Component } from './story7/story7.component';
import { Story8Component } from './story8/story8.component';
import { Story9Component } from './story9/story9.component';
import { Story10Component } from './story10/story10.component';
import { Story11Component } from './story11/story11.component';
import { Story12Component } from './story12/story12.component';
import { Story13Component } from './story13/story13.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GridComponent,
    PlayerComponent,
    Story1Component,
    Story2Component,
    Story3Component,
    Story4Component,
    Story5Component,
    Story6Component,
    Story7Component,
    Story8Component,
    Story9Component,
    Story10Component,
    Story11Component,
    Story12Component,
    Story13Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
