import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { RatingComponent } from './rating/rating.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // to use for two way data binding.
import { SummaryPipe } from './summary.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientComponent } from './http-client/http-client.component'
import { HttpclientService } from './Services/httpclient.service';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GitfollowerComponent } from './gitfollower/gitfollower.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { OrderService } from './Services/order.service';
import {AuthService} from './Services/auth.service';
// import { fakeBackendProvider } from './helpers/fake-backend';
// import {MockBackend} from '@angular/http/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    RatingComponent,
    AuthorsComponent,
    SummaryPipe,
    InputFormatDirective,
    ContactFormComponent,
    ReactiveFormsComponent,
    HttpClientComponent,
    NotFoundComponent,
    NavbarComponent,
    GitfollowerComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    HomeComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', component:CourseComponent},
      {path: 'home', component: HomeComponent},
      {path: 'admin', component: AdminComponent},
      { path: 'login', component: LoginComponent },
      { path: 'no-access', component: NoAccessComponent },
      {path:'follower/:id/:page',component:GitfollowerComponent},
      {path:'author',component:AuthorsComponent},
      {path:'reactiveform',component:ReactiveFormsComponent},
      {path:'httpclient',component:HttpClientComponent},
      {path:'**',component:NotFoundComponent}
    ])
  ],
  providers: [CoursesService,
     AuthorsService, 
     HttpclientService,
     OrderService,
     AuthService,
     HttpClientTestingModule,],
  bootstrap: [AppComponent]
})
export class AppModule { }
