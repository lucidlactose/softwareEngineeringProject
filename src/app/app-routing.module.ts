import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePageComponent} from './profile-page/profile-page.component'
import { EmployeesPageComponent} from './employees-page/employees-page.component'
import {DashboardInventoryComponent} from './dashboard-inventory/dashboard-inventory.component'
import {DashboardArchivesComponent} from './dashboard-archives/dashboard-archives.component'
import {DashboardSettingsComponent} from './dashboard-settings/dashboard-settings.component'


const routes: Routes = [
  {path: 'profilePage', component: ProfilePageComponent},
  {path: 'employeePage', component: EmployeesPageComponent},
  {path: 'inventoryPage', component: DashboardInventoryComponent},
  {path: 'archivesPage', component: DashboardArchivesComponent},
  {path: 'settingsPageDashboard', component: DashboardSettingsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
