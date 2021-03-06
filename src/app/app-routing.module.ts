import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePageComponent} from './profile-page/profile-page.component';
import { EmployeesPageComponent} from './employees-page/employees-page.component';
import {DashboardInventoryComponent} from './dashboard-inventory/dashboard-inventory.component';
import {DashboardArchivesComponent} from './dashboard-archives/dashboard-archives.component';
import {DashboardSettingsComponent} from './dashboard-settings/dashboard-settings.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MissionStatementComponent } from './mission-statement/mission-statement.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LogInComponent } from './log-in/log-in.component';
import { AdminPageComponent} from './admin-page/admin-page.component'; 
import { AddEmployeePageComponent } from './add-employee-page/add-employee-page.component';
import { AddInventoryPageComponent } from './add-inventory-page/add-inventory-page.component';

const routes: Routes = [
  {path: 'profilePage', component: ProfilePageComponent},
  {path: 'employeePage', component: EmployeesPageComponent},
  {path: 'inventoryPage', component: DashboardInventoryComponent},
  {path: 'archivesPage', component: DashboardArchivesComponent},
  {path: 'settingsPageDashboard', component: DashboardSettingsComponent},
  {path: '', component: HomePageComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'missionStatement', component: MissionStatementComponent},
  {path: 'contactUs', component: ContactUsComponent},
  {path: 'logIn', component: LogInComponent},
  {path: 'adminPage', component: AdminPageComponent},
  {path: 'addEmployee', component: AddEmployeePageComponent},
  {path: 'addInventory', component: AddInventoryPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
