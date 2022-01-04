import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwitterMainComponent } from './twitter-main/twitter-main.component';
import { IconsMainComponent } from './components/icons-main/icons-main.component';
import { UserComponent } from './components/user/user.component';
import { TopNewsComponent } from './components/top-news/top-news.component';
import { ButtonFollowComponent } from './components/button-follow/button-follow.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { IconsTwittarComponent } from './components/icons-twittar/icons-twittar.component';
import { IconsFeedComponent } from './components/icons-feed/icons-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    TwitterMainComponent,
    IconsMainComponent,
    UserComponent,
    TopNewsComponent,
    ButtonFollowComponent,
    RodapeComponent,
    IconsTwittarComponent,
    IconsFeedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
