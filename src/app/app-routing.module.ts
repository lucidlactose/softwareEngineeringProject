import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MissionStatementComponent } from './mission-statement/mission-statement.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LogInComponent } from './log-in/log-in.component';


const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'aboutUs', component:AboutUsComponent},
  {path:'missionStatement',component:MissionStatementComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'logIn',component:LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
