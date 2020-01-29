
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AdminComponent } from './components/admin/admin.component';
import { CircusComponent } from './components/circus/circus.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EventComponent } from './components/event/event.component';
import { FooterComponent } from './footer/footer.component';
import { AdminPageComponent } from './pages/admin/admin-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LocalCircusComponent } from './pages/local-circus/local-circus.component';
import { SalesComponent } from './pages/sales/sales.component';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EventComponent,
    CircusComponent,
    AdminComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    LocalCircusComponent,
    SalesComponent,
    FooterComponent,
    AdminPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
