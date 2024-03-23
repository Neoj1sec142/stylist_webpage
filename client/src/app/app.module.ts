// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// Component Imports
import { AppComponent } from './app.component';
import { LoadingInterceptor } from './helpers/loading.interceptor';
import { LoaderComponent } from './components/loader/loader.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';


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






@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    FooterBarComponent,
    NavBarComponent,
    HeaderBarComponent,
    HomePageComponent,
    AboutPageComponent,
    NotfoundComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
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
    MatListModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
