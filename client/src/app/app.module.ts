// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Component Imports
import { AppComponent } from './app.component';
import { LoadingInterceptor } from './helpers/loading.interceptor';
import { LoaderComponent } from './components/loader/loader.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AdminManageComponent } from './components/admin-manage/admin-manage.component';
import { PortfolioMainComponent } from './components/portfolio-main/portfolio-main.component';
import { AdminImageComponent } from './components/admin-image/admin-image.component';
import { AdminGroupsComponent } from './components/admin-groups/admin-groups.component';
import { AdminTrackingComponent } from './components/admin-tracking/admin-tracking.component';
import { AdminUtilsComponent } from './components/admin-utils/admin-utils.component';

// Material Imports
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatDialogModule } from '@angular/material/dialog'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';





@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    FooterBarComponent,
    NavBarComponent,
    HeaderBarComponent,
    LoginComponent,
    LogoutComponent,
    HomePageComponent,
    AboutPageComponent,
    NotfoundComponent,
    ContactPageComponent,
    AdminManageComponent,
    AdminImageComponent,
    AdminGroupsComponent,
    AdminTrackingComponent,
    AdminUtilsComponent,
    PortfolioMainComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Material UI
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatGridListModule,
    MatChipsModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: LoadingInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
