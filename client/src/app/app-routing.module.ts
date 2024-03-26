import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AdminManageComponent } from './components/admin-manage/admin-manage.component';
import { PortfolioMainComponent } from './components/portfolio-main/portfolio-main.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuard } from './helpers/auth-guard';
import { StaffGuard } from './helpers/staff-guard';

const routes: Routes = [
  { path:'', component: HomePageComponent, pathMatch: 'full' },
  { path: 'about', component: AboutPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  { path: 'manage', component: AdminManageComponent, canActivate: [StaffGuard] },
  { path: 'contact', component: ContactPageComponent },
  { path: 'portfolio', component: PortfolioMainComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
