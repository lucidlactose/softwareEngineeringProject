import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { DashboardInventoryComponent } from './dashboard-inventory/dashboard-inventory.component';
import { DashboardArchivesComponent } from './dashboard-archives/dashboard-archives.component';
import { DashboardSettingsComponent } from './dashboard-settings/dashboard-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    EmployeesPageComponent,
    DashboardInventoryComponent,
    DashboardArchivesComponent,
    DashboardSettingsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
