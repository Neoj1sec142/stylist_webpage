import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AdminManageComponent } from './components/admin-manage/admin-manage.component';

const routes: Routes = [
  { path:'', component: HomePageComponent, pathMatch: 'full' },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'manage', component: AdminManageComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
