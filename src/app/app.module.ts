import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MissionStatementComponent } from './mission-statement/mission-statement.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LogInComponent } from './log-in/log-in.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    AboutUsComponent,
    MissionStatementComponent,
    ContactUsComponent,
    LogInComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
