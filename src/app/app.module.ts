import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostComponent } from './components/post/post.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AskQuestionComponent } from './pages/ask-question/ask-question.component';
import { QuestionBoxComponent } from './components/question-box/question-box.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    SignupPageComponent,
    HomePageComponent,
    LoginPageComponent,
    QuestionBoxComponent,
    AskQuestionComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // HttpClientXsrfModule.withOptions({
    //   cookieName: 'My-Xsrf-Cookie',
    //   headerName: 'My-Xsrf-Header',
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
