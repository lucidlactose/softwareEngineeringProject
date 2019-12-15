import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProfilePageComponent } from './profile-page/profile-page.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { DashboardInventoryComponent } from './dashboard-inventory/dashboard-inventory.component';
import { DashboardArchivesComponent } from './dashboard-archives/dashboard-archives.component';
import { DashboardSettingsComponent } from './dashboard-settings/dashboard-settings.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MissionStatementComponent } from './mission-statement/mission-statement.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LogInComponent } from './log-in/log-in.component';
import {UserService} from './Services/user.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddEmployeePageComponent } from './add-employee-page/add-employee-page.component';
import { AddInventoryPageComponent } from './add-inventory-page/add-inventory-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    EmployeesPageComponent,
    DashboardInventoryComponent,
    DashboardArchivesComponent,
    DashboardSettingsComponent,
    NavBarComponent,
    HomePageComponent,
    AboutUsComponent,
    MissionStatementComponent,
    ContactUsComponent,
    LogInComponent,
    AdminPageComponent,
    AddEmployeePageComponent,
    AddInventoryPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
